const React = require('react')
const Layout = require('./Layout')

class Show extends React.Component {
    render() {
        return (
            <Layout username={this.props.username}>
                
                <div class="showContainer">
                    <form action="/list/">
                        <input type="submit" value="Back to the list"/>
                    </form><br/>
                        <h1>{this.props.item.artist}</h1>
                        <p>Date: {this.props.item.date}</p><br/>
                        <p>Location: {this.props.item.location}</p><br/>
                        <p>Has this been heard? {this.props.item.listenedTo ? `YES` : `NO`}</p><br/>
                        <form action={`/list/${this.props.item._id}/edit`}>
                            <input type="submit" value="Edit this item"/>
                        </form>
                    <form class="deleteForm" action={`/list/${this.props.item._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete this item"/>
                    </form>
                    <img src="https://blog.expertrec.com/wp-content/uploads/2019/06/Utorrent-Banner1.png" alt="banner"/>
                </div>
            </Layout>
        )
    }
}
module.exports = Show