import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubRepos } from '../../providers/github-repos';

/*
  Generated class for the RepoDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {

  repoDetails: Repo;
  repo: Repo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubRepos: GithubRepos) {

    this.repo = navParams.get('repo');

    githubRepos.getRepositoryDetails(this.repo.owner.login, this.repo.name).subscribe(response => {
      this.repoDetails = response;
    });

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetailsPage');
  }

}
