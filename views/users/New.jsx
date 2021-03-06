const React = require('react')
const Layout = require('../Layout')

class NewUser extends React.Component {
    render() {
        return (
            <Layout username={this.props.username}>
                <h1>Create a New User Login</h1>
                <form action="/user/" method="post">
                    User name: <input type="text" name="username"/><br/>
                    Password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Create User"/>
                </form>
            </Layout>
        )
    }
}
module.exports = NewUser;