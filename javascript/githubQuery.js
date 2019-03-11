const Github = require('github-api');

let gh = new Github();
let user = "arxaqapi";

gh.getUser(user).getRepos()