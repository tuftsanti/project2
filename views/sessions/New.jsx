const React = require('react')

class LoginUser extends React.Component {
    render() {
        return (
            <div>
                <h1>Please Login</h1>
                <form action="/session/" method="POST">
                    User name: <input type="text" name="username"/><br/>
                    Password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
module.exports = LoginUser;