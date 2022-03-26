import {action, makeObservable} from "mobx";
import AppStore from "./app";
import {IUser} from "../interfaces";

export default class UserStore {
    user: IUser | null = null

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load(users: IUser) {
        this.user = users
    }
}

