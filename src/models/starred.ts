import {IStarred} from "../interfaces";
import AppStore from "../store/app";

import {makeObservable} from "mobx";


export default class Starred implements IStarred {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;

    constructor(private store: AppStore, starred: IStarred) {
        this.id = starred.id
        this.node_id = starred.node_id
        this.name = starred.name
        this.full_name = starred.full_name
        this.private = starred.private

        makeObservable(this);
    }

}
