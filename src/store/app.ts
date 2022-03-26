import UserStore from "./users";
import RepositoriesStore from "./repositories";

export default class AppStore {
    user = new UserStore(this);
    repositories = new RepositoriesStore(this);
}
