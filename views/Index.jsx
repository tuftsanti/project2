const React = require('react')
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        return (
            <Layout>
                <div class="indexContainer">
                    {this.props.username ? 
                    <form action="/session/?_method=delete" method="post">
                        <input type="submit" value="Click To Logout"/>
                    </form> : ''}
                    <h1>The Music List</h1>
                    <form action="/list/new">
                        <input type="submit" value="Add a Request"/>
                    </form>
                <ul class="indexUlContainer">
                    {
                    this.props.item.map((item, index) => {
                        return (
                            <li>
                            <h4><a href={`/list/${item._id}`}>{ item.artist }{item.date}</a><br/></h4>

                            <form action={`/list/${item._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="Delete this item from the list"/>
                            </form>
                            </li>
                            )
                        })
                    }
                </ul>
                <img src="https://blog.expertrec.com/wp-content/uploads/2019/06/Utorrent-Banner1.png" alt="utbanner"/>
            </div>
            </Layout>
        )
    }
}

module.exports = Index;