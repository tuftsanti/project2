const React = require('react')

const Layout = (props) => {
    return (
        <>  
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" defer/>
            </head>
            <body>
                <div class="indexContainer">
                    <nav class="navbar navbar-expand-md ">
                    <a class="navbar-brand" href="/list/">The Music List</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-item" href="/list/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-item" href="/list/new">Request Music</a>
                                </li>
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                {/* <li>
                                    <div>Logged in as:<br/>{props.username}</div>
                                </li> */}
                                <li class="nav-item">
                                    {props.username ?                                                           
                                        <div>Logged in as: {props.username}
                                        <form action="/session/?_method=delete" method="post">
                                            <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Logout</button>
                                        </form> </div>: 
                                        <form action="/session/" method="POST">
                                            <div class="form-row align-items-center">
                                                <div class="col-auto">
                                                    <label class="sr-only" for="inlineFormInput">Name</label>
                                                    <input type="text" class="form-control mb-2" id="inlineFormInput" name="username" placeholder="username"/>
                                                </div>
                                                <div class="col-auto">
                                                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                                    <div class="input-group mb-2">
                                                        <div class="input-group-prepend">
                                                        </div>
                                                        <input type="text" class="form-control" id="inlineFormInputGroup" name="password" placeholder="password"/>
                                                        <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Login</button>

                                                    </div>
                                                </div>
                                            </div>

                                            {/*username: <input type="text" name="username" id="username"/><br/>
                                            password: <input type="password" name="password" id="username"/><br/>
                                            <input type="submit" value="Login"/>*/}
                                        </form>}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {props.children}
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
            </body>
            <footer>
                <div class="footer">
                    <img id="footer" src="https://ksassets.timeincuk.net/wp/uploads/sites/54/2015/03/utorrent-1.jpeg" alt="footer"/>
                </div>
            </footer>
        </>
    )
}

module.exports = Layout;