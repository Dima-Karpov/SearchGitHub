import UserStore from "./users";
import RepositoriesStore from "./repositories";
import StarredStore from "./starred";

export default class AppStore {
    user = new UserStore(this);
    repositories = new RepositoriesStore(this);
    starred = new StarredStore(this);
}
