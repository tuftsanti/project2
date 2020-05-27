const React = require('react')
const Layout = require('./Layout')

class Edit extends React.Component {
    render () {
        return (
            <Layout username={this.props.username} title = "Edit this show">
                {/* <h1>Edit this item</h1> */}
                {/* <a href="/list">Return to the Music Index</a> */}
                <div class="showContainer">
                    <div class="showUl">
                        <div class="sameline">
                            <form action="/list">
                                <input type="submit" value="Back to the list"/>
                            </form>
                            <form action={`/list/${this.props.item._id}`}>
                                <input type="submit" value="Back to the item"/>
                            </form>
                        </div>
                        <form action={`/list/${this.props.item._id}?_method=PUT`} method="POST">
                            <h2>Artist: </h2><input type="text" name="artist" defaultValue={this.props.item.artist}/><br/>
                            <h2>Date: </h2><input type="text" name="date" defaultValue={this.props.item.date}/><br/>
                            <h2>Location: </h2><input type="text" name="location" defaultValue={this.props.item.location}/><br/>
                            <h2>Have you listened to this yet? </h2>{this.props.item.listenedTo} <input type="checkbox" name="listenedTo" checked={this.props.item.listenedTo ? 'checked' : ''} /><br/>
                            <input type="submit" value="Submit edits"/>
                        </form>
                    </div>
                </div>
                {/* <img src="https://blog.expertrec.com/wp-content/uploads/2019/06/Utorrent-Banner1.png" alt="banner"/> */}
            </Layout>
        )
    }
}

module.exports = Edit;