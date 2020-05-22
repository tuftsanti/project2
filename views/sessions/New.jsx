const React = require('react')

class LoginUser extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form action="/session/" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
module.exports = LoginUser;