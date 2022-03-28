import {action, makeObservable} from "mobx";

import {IRepository} from "../interfaces";
import {AppStore} from "./app";

import {filterRepositories, sortRepositories} from "../pages/User/utility";

export class RepositoriesStore {
    repositories: IRepository[] | undefined

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load(repositories: IRepository[]) {
        this.repositories = repositories.filter(filterRepositories).sort(sortRepositories)
    }
}
