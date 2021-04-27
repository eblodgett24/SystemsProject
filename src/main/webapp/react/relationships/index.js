import DirectorList from "./directors/director-list";
import FilmList from "./films/film-list";
import DirectorEditorForm from "./directors/director-editor-form";
import FilmEditorForm from "./films/film-editor-form";
import UserFilmList from "./users/user-film-list";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/directors", "/"]} exact={true}>
                    <DirectorList/>
                </Route>
                <Route path="/directors/:id" exact={true}>
                    <DirectorEditorForm/>
                </Route>
                <Route path={["/films", "/"]} exact={true}>
                    <FilmList/>
                </Route>
                <Route path="/films/:title" exact={true}>
                    <FilmEditorForm/>
                </Route>
                <Route path="/films/:title/users" exact={true}>
                    <UserFilmList/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
