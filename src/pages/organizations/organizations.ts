import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { GithubOrganizations } from '../../providers/github-organizations';
import { Organization } from '../../models/organization';
import { OrganizationDetailsPage } from '../organization-details/organization-details'

/*
  Generated class for the Organizations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class OrganizationsPage {

  organizations: Organization[];
  originalOrganizations: Organization[];
  searchControl = new FormControl();
  organizationToSearch = "";

  ngOnInit() {
      // debounce keystroke events
      this.searchControl.valueChanges
      .debounceTime(500)
      .subscribe(newValue => {
          this.organizationToSearch = newValue; 
          this.search();
      });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubOrganizations : GithubOrganizations) {

    githubOrganizations.getAllOrganizations().subscribe(organizations => {
        this.organizations = organizations;
        this.originalOrganizations = organizations;
    });

  }

  search() {

    let term = this.organizationToSearch;
   
    if (term.trim() === '' || term.trim().length < 3) {
     
      this.organizations = this.originalOrganizations;

    } else {
      
      this.githubOrganizations.searchOrganizations(term).subscribe(organizations => {
        this.organizations = organizations;
      });

    }
    
  }

  goToDetails(organization: string) {

    this.navCtrl.push(OrganizationDetailsPage, {organization});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationsPage');
  }

}
