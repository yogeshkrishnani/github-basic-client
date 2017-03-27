import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { GithubRepos } from '../../providers/github-repos';
import { Repo } from '../../models/repo';
import { RepoDetailsPage } from '../repo-details/repo-details';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {

  repos: Repo[];
  originalRepos: Repo[];
  searchControl = new FormControl();
  repoToSearch = "";

  ngOnInit() {
      // debounce keystroke events
      this.searchControl.valueChanges
      .debounceTime(500)
      .subscribe(newValue => {
          this.repoToSearch = newValue; 
          this.search();
      });
  }

  constructor(public navCtrl: NavController, private githubRepos : GithubRepos) {

    githubRepos.getAllPublicRepositories().subscribe(repos => {
        this.repos = repos;
        this.originalRepos = repos;
    })

  }

  search() {
    
    let term = this.repoToSearch;
   
    if (term.trim() === '' || term.trim().length < 3) {
     
      this.repos = this.originalRepos;

    } else {
     
      this.githubRepos.searchRepositories(term).subscribe(repositories => {
        this.repos = repositories;
      });

    }

  }

  goToDetails(repo : Repo) {

    this.navCtrl.push(RepoDetailsPage, {repo})

  }

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }
}