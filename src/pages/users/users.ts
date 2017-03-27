import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { GithubUsers } from '../../providers/github-users';
import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: User[]
  originalUsers: User[];
  searchControl = new FormControl();
  userToSearch = "";

  ngOnInit() {
      // debounce keystroke events
      this.searchControl.valueChanges
      .debounceTime(500)
      .subscribe(newValue => {
          this.userToSearch = newValue; 
          this.search();
      });
  }
  
  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {

     githubUsers.load().subscribe(users => {
        this.users = users;
        this.originalUsers = users;
     })

  }

  search() {
    let term = this.userToSearch;
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }

  goToDetails(user: string) {

    this.navCtrl.push(UserDetailsPage, {user});

  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }
}