import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';

/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {

  user : User;
  userDetails : User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers : GithubUsers) {

    this.user = navParams.get('user');
    this.userDetails;

    githubUsers.loadDetails(this.user.login).subscribe(user => {
      this.userDetails = user;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
