const React = require('react')
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        return (
            <Layout>
                <div class="indexContainer">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/list/">The Music List</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/list/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <form action="/list/new">
                            <input type="submit" value="Add a Request"/>
                        </form>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="/session/?_method=delete" action="/session/?_method=delete" method="post">Logout</a> */}
                        {this.props.username ? 
                        <form action="/session/?_method=delete" method="post">
                            <input type="submit" value="Logout"/>
                        </form> : <form action="/session/" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Login"/>
                </form>}
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    {/* <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

                        {/* {this.props.username ? 
                        <form action="/session/?_method=delete" method="post">
                            <input type="submit" value="Click To Logout"/>
                        </form> : ''} */}
                        {/* <h1>The Music List</h1> */}
                        {/* <form action="/list/new">
                            <input type="submit" value="Add a Request"/>
                        </form> */}
                </nav>
                <ul class="indexUlContainer">
                    {
                    this.props.item.map((item, index) => {
                        return (
                            <li>
                            <h4><a href={`/list/${item._id}`}>{ item.artist }{item.date}</a><br/></h4>

                            <form action={`/list/${item._id}?_method=DELETE`} method="POST">
                                <input class="deleteButton" type="submit" value="Delete this item from the list"/>
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