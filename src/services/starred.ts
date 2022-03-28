import {AppApi} from "./app";
import {AppStore} from "../store/app";


export class StarredAPI {

    constructor(private api: AppApi, private store: AppStore) {}

    async getStarred(username: string) {
        const res =  await this.api.client.get(`/users/${username}/starred`, {
            params: {
                per_page: 1,
                page: 2,
            },
        })
        this.store.starred.load(res);
    }
}