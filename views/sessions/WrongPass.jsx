const React = require('react')
const Layout = require('../Layout')

class LoginUser extends React.Component {
    render() {
        return (
            <Layout username={this.props.username}>
                <h1>You have entered the wrong password</h1><br/>
                <h1>Please try again</h1>
                <form action="/session/" method="POST">
                    User name: <input type="text" name="username"/><br/>
                    Password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Login"/>
                </form>
            </Layout>
        )
    }
}
module.exports = LoginUser;