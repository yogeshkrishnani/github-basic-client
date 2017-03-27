import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { ReposPage } from '../pages/repos/repos';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { OrganizationDetailsPage } from '../pages/organization-details/organization-details';

import { GithubUsers } from '../providers/github-users';
import { GithubRepos } from '../providers/github-repos';
import { GithubOrganizations } from '../providers/github-organizations';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    RepoDetailsPage,
    OrganizationDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    RepoDetailsPage,
    OrganizationDetailsPage
  ],
  providers: [GithubUsers, GithubRepos,GithubOrganizations]
})
export class AppModule {}
