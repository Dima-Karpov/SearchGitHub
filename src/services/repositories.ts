import {AppApi} from "./app";
import {AppStore} from "../store/app";


export class RepositoriesAPI {

    constructor(private api: AppApi, private store: AppStore) {}

    async getRepositories(username: string) {
        const res =  await this.api.client.get(`/users/${username}/repos`, {
            params: {
                per_page: 30,
            },
        })
        this.store.repositories.load(res.data);
    }
}