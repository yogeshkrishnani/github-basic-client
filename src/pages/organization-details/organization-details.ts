import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Organization } from '../../models/organization';
import { GithubOrganizations } from '../../providers/github-organizations';

/*
  Generated class for the OrganizationDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organization-details',
  templateUrl: 'organization-details.html'
})
export class OrganizationDetailsPage {

  organization : Organization;
  organizationDetails : Organization;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubOrganizations : GithubOrganizations) {

    this.organization = navParams.get('organization');
    this.organizationDetails;

    githubOrganizations.getOrganizationDetails(this.organization.login).subscribe(organization => {
      this.organizationDetails = organization;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationDetailsPage');
  }

}
