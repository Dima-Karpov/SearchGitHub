import {IRepository} from "../interfaces";
import AppStore from "./app";
import {action, makeObservable} from "mobx";

export default class RepositoriesStore {
    repositories: any

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load(repositories: IRepository[]) {
        this.repositories = repositories
    }
}
