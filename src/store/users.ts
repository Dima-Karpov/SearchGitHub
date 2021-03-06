import {action, makeObservable} from "mobx";
import {AppStore} from "./app";
import {IUser} from "../interfaces";

export class UserStore {
    user: IUser | undefined = undefined

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load(users: IUser) {
        this.user = users
    }
}

