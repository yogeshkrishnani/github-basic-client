// User model based on the structure of github api at
// https://api.github.com/users/{username}

export interface Organization {
  login: string;
  description: string;
  avatar_url: string;
}