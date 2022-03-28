import {AppApi} from "./app";
import {AppStore} from "../store/app";


export class UserApi {

    constructor(private api: AppApi, private store: AppStore) {}

    async getUser(username: string) {
        const res = await this.api.client.get(`/users/${username}`);
        this.store.user.load(res.data);
    }
}
