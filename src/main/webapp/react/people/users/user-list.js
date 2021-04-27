import userService from "./user-service"
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;
const UserList = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    return(
        <div>
            <h2>User List</h2>
            <button onClick={() => history.push("/users/new")}>
                Add User
            </button>
            <ul className="list-group">
                {
                  users.map(user =>
                      <li key={user.username}>
                          <Link to={`/users/${user.username}`}>
                              {user.firstName},
                              {user.lastName},
                              {user.username},
                              {user.email}
                          </Link>
                      </li>)
                }
            </ul>
        </div>
    )
}

export default UserList;