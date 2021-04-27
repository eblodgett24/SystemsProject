import userService from "./user-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
        const {username} = useParams()
        const [user, setUser] = useState({})
        useEffect(() => {
            if(username !== "new") {
                findUserByUsername(username)
            }
        }, []);
        const createUser = (user) =>
            userService.createUser(user)
                .then(() => history.goBack())
        const findUserByUsername = (username) =>
            userService.findUserByUsername(username)
                .then(user => setUser(user))
        const deleteUser = (username) =>
            userService.deleteUser(username)
                .then(() => history.goBack())
        const updateUser = (username, newUser) =>
            userService.updateUser(username, newUser)
                .then(() => history.goBack())
        return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                value={user.firstName}/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                value={user.lastName}/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, username: e.target.value}))}
                value={user.username}/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                value={user.password}/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, email: e.target.value}))}
                value={user.email}/>
            <label>Date of Birth (yyyy-mm-dd)</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, dateOfBirth: e.target.value}))}
                value={user.dateOfBirth}/>
            <label>Profile Picture</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, profilePicture: e.target.value}))}
                value={user.profilePicture}/>
            <Link to={`/users/${user.username}/films`}>
                Films
            </Link>
            <button
                onClick={() => {history.goBack()}}>
                Cancel
            </button>
            <button
                onClick={() => deleteUser(user.username)}>
                Delete
            </button>
            <button
                onClick={() => updateUser(user.username, user)}>
                Save
            </button>
            <button
                onClick={() => createUser(user)}>
                Create
            </button>
        </div>
    )
}

export default UserFormEditor