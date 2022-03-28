import {makeObservable} from "mobx";

import {IStarredRepository} from "../interfaces";
import {AppStore} from "../store/app";



export class Starred implements IStarredRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;

    constructor(private store: AppStore, starred: IStarredRepository) {
        this.id = starred.id
        this.node_id = starred.node_id
        this.name = starred.name
        this.full_name = starred.full_name
        this.private = starred.private

        makeObservable(this);
    }

}
