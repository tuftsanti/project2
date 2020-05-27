const React = require('react')
const Layout = require('./Layout')

class New extends React.Component {
    render () {
        return (
            <Layout username={this.props.username} title = "Request a show">
                {/* <h1>Create a request</h1> */}
                <div class="showContainer">
                    <div class="showUl">
                        <form action="/list">
                            <input type="submit" value="Back to the list"/>
                        </form>
                        <form action="/list" method="post">
                            <h2>Artist: </h2><input type="text" name="artist"/><br/>
                            <h2>Date: </h2><input type="text" name="date"/><br/>
                            <h2>Location: </h2><input type="text" name="location"/><br/>
                            {/* <h2>Have you listened to this yet? </h2><input type="checkbox" name="listenedTo"/><br/> */}
                            <input type="submit" value="Create new request"/>
                        </form>
                    </div>
                </div>
                {/* <img src="https://blog.expertrec.com/wp-content/uploads/2019/06/Utorrent-Banner1.png" alt="banner"/> */}
            </Layout>
        )
    }
}

module.exports = New;