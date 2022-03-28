import axios from "axios";
import {AppStore} from "../store/app";

import {UserApi} from "./user";
import {RepositoriesAPI} from "./repositories";
import {StarredAPI} from "./starred";

import { baseULR } from "../endpoints";


export class AppApi {
    client = axios.create({
        baseURL: baseULR,
        headers: {
            Accept: "application/vnd.github.v3+json",
        },
    });

    user: UserApi;
    repository: RepositoriesAPI;
    starred: StarredAPI;


    constructor(store: AppStore) {
        this.user = new UserApi(this, store);
        this.repository = new RepositoriesAPI(this, store);
        this.starred = new StarredAPI(this, store);
    }
}

