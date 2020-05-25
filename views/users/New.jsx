const React = require('react')

class NewUser extends React.Component {
    render() {
        return (
            <div>
                <h1>Create a New User Login</h1>
                <form action="/user/" method="post">
                    User name: <input type="text" name="username"/><br/>
                    Password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Create User"/>
                </form>
            </div>
        )
    }
}
module.exports = NewUser;