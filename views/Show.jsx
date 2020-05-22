const React = require('react')
const Layout = require('./Layout')

class Show extends React.Component {
    render() {
        return (
            <Layout>
                {this.props.username ? 
                <form action="/session/?_method=delete" method="post">
                    <input type="submit" value="Click To Logout"/>
                </form> : ''}
                <h1>{this.props.item.artist}</h1>
                <div class="showContainer">
                    <form action="/list/">
                        <input type="submit" value="Back to the list"/>
                    </form><br/>
                    <p>Date: {this.props.item.date}</p><br/>
                    <p>Location: {this.props.item.location}</p><br/>
                    <p>Has this been heard? {this.props.item.listenedTo ? `YES` : `NO`}</p><br/>
                    {/* <p>Created: {Date(this.props.item.createdAt)}</p><br/> */}
                    <a href={`/list/${this.props.item._id}/edit`}>Edit This Item</a>
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