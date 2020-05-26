const React = require('react')
const Layout = require('../Layout')

class LoginUser extends React.Component {
    render() {
        return (
            <Layout username={this.props.username}>
                <h1>Please login to make changes</h1>
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