import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import { Repo } from '../models/repo';

/*
  Generated class for the GithubRepos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubRepos {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubRepos Provider');
  }


  // get all github repositories
  getAllPublicRepositories(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/repositories`) 
      .map(res => <Repo[]>(res.json()))
  }

  // Search for github repositories  
  searchRepositories(searchParam: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repositories?q=${searchParam}`) 
      .map(res => <Repo[]>(res.json().items))
  }

  // Get Repository Details
  getRepositoryDetails(owner: String, repo: String): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/repos/${owner}/${repo}`)
      .map(res => <Repo>res.json());
  }

}
