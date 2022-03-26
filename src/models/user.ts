import {makeObservable} from "mobx";
import {IUser} from "../interfaces";
import AppStore from "../store/app";

export default class User implements IUser {
    name: string;
    avatar_url: string;
    twitter_username: string;
    public_repos: number;
    location: string;
    company: string;
    followers: number;
    following: number;

    constructor(private store: AppStore, user: IUser) {
        this.name = user.name
        this.avatar_url = user.avatar_url
        this.twitter_username = user.twitter_username
        this.public_repos = user.public_repos
        this.location = user.location
        this.company = user.company
        this.followers = user.followers
        this.following = user.following


        makeObservable(this);
    }

}
