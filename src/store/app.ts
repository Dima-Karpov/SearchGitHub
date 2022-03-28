import {UserStore} from "./users";
import {RepositoriesStore} from "./repositories";
import {StarredStore} from "./starred";

export  class AppStore {
    user = new UserStore(this);
    repositories = new RepositoriesStore(this);
    starred = new StarredStore(this);
}
