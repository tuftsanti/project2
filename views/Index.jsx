const React = require('react')
const Layout = require('./Layout')

class Index extends React.Component {
    


    render() {
        return (
            <Layout username={this.props.username}>
                <div id="indexTitle">The Music List Index</div>
                {this.props.match ? <h1>{this.props.match}</h1> : ''}
                <ul class="indexUlContainer">
                    {
                    this.props.item.map((item, index) => {
                        return (
                            <li>
                                <div class="sameline">
                                    <h4><a class="indexName" href={`/list/${item._id}`}>{ item.artist }</a></h4>
                                    <h4><a class="indexName" href={`/list/${item._id}`}>{item.date}</a><br/></h4>
                                </div>
                                <form action={`/list/${item._id}?_method=DELETE`} method="POST">
                                    <input class="deleteButton" type="submit" value="Delete this item from the list"/>
                                </form>
                            </li>
                            )
                        })
                    }
                </ul>
                {/* <img src="https://blog.expertrec.com/wp-content/uploads/2019/06/Utorrent-Banner1.png" alt="utbanner"/> */}

            </Layout>
        )
    }
}

module.exports = Index;