const React = require('react')
const Layout = require('./Layout')

class Show extends React.Component {
    render() {
        return (
            <Layout username={this.props.username}>
                
                <div class="showContainer">
                    <div class="showUl">

                        <form action="/list/">
                            <input type="submit" value="Back to the list"/>
                        </form><br/>
                            <div class="sameline"><p>Artist: </p><p>{this.props.item.artist}</p></div>
                            <div class="sameline"><p>Date: </p><p>{this.props.item.date}</p></div><br/>
                            <div class="sameline"><p>Location: </p><p>{this.props.item.location}</p></div><br/>
                            <div class="sameline"><p>Listened to yet? </p><p>{this.props.item.listenedTo ? `Yes` : `No`}</p></div><br/>
                        <div class="sameline">
                            <form action={`/list/${this.props.item._id}/edit`}>
                                <input type="submit" value="Edit this item"/>
                            </form>
                            <form class="deleteForm" action={`/list/${this.props.item._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="Delete this item"/>
                            </form>
                        </div>
                    {/* <img src="https://blog.expertrec.com/wp-content/uploads/2019/06/Utorrent-Banner1.png" alt="banner"/> */}
                    </div>

                </div>
            </Layout>
        )
    }
}
module.exports = Show