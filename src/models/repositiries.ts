import {IRepository} from "../interfaces";
import AppStore from "../store/app";

import {makeObservable} from "mobx";


export default class Repositories implements IRepository {
    name: string;
    description: string;
    stars: number;
    forks: number;
    stargazers_count: number;
    language: string;
    updated_at: string;

    constructor(private store: AppStore, repository: IRepository) {
        this.name = repository.name
        this.description = repository.description
        this.stars = repository.stars
        this.forks = repository.forks
        this.stargazers_count = repository.stargazers_count
        this.language = repository.language
        this.updated_at = repository.updated_at

        makeObservable(this);
    }


}
