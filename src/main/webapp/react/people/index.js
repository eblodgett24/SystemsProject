import FilmUserList from "./users/film-user-list";
import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:username" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path="/users/:username/films" exact={true}>
                    <FilmUserList/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
