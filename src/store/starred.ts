import {action, makeObservable} from "mobx";
import {AxiosResponse} from "axios";

import {AppStore} from "./app";
import {IHeaders, IStarredRepository} from "../interfaces";

export class StarredStore {
    headers: IHeaders | any
    data: IStarredRepository | undefined

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load(starred: AxiosResponse) {
        this.data = starred.data
        this.headers = starred.headers
    }
}
