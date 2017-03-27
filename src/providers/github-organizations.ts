import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import { Organization } from '../models/organization';


/*
  Generated class for the GithubOrganizations provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubOrganizations {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubOrganizations Provider');
  }

  // Get all github organizations
  getAllOrganizations(): Observable<Organization[]> {
    return this.http.get(`${this.githubApiUrl}/organizations`) 
      .map(res => <Organization[]>(res.json()))
  }

  // Search for github Organization  
  searchOrganizations(searchParam: string): Observable<Organization[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}+type:org`) 
      .map(res => <Organization[]>(res.json().items))
  }

  // Get Organization Details
  getOrganizationDetails(org: String): Observable<Organization> {
    return this.http.get(`${this.githubApiUrl}/orgs/${org}`)
      .map(res => <Organization>res.json());
  }

}
