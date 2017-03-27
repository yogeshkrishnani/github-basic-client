// User model based on the structure of github api at
// https://api.github.com/users/{username}

export interface Repo {
  name: string;
  description: string;
  owner: any;
  html_url: string;
}