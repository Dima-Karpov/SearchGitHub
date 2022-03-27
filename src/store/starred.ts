import AppStore from "./app";
import {action, makeObservable} from "mobx";
import {AxiosResponse} from "axios";
import {IStarred} from "../interfaces";

export default class StarredStore {
    headers: any
    data: IStarred | undefined

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load(starred: AxiosResponse) {
        this.data = starred.data
        this.headers = starred.headers
    }
}
