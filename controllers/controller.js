const express = require('express')
const routeController = express.Router()
const show = console.log
const mongoose = require('mongoose')
const Item = require('../models/item.js')
const shows = require('../models/shows.js')

const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

// AUTHENTICATE THE USER
const authenticate = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/session/new')
    }
}
/// ROUTES ///
// INDEX ROUTE
routeController.get('/', (req,res) => {
    let match = '';
    if(req.query.search) {
        const searchTerm = new RegExp (escapeRegex(req.query.search), 'gi');
        Item.find({$or: [{artist: searchTerm}, {date: searchTerm}, {location: searchTerm}]}, (error, searchItem) => {
            if (error) {
                show(error)
            } else {
                if(searchItem.length < 1) {
                    match = `That show doesn't exist. Perhaps consider making a request?`;
                }
                const props = {
                    item: searchItem,
                    match: match,
                    username:req.session.currentUser
                }
                res.render('Index', props)
            }
        })
    } else {
    const showAll = (error, allItems) => {
        if (error) {
            show(error)
        } else {
            const props = {
                item: allItems,
                match: match,
                username:req.session.currentUser
            }
            // show(showAll)
            res.render('Index', props)
        }
    }
    Item.find({}, showAll)
}
})

// NEW ROUTE
routeController.get('/new', authenticate, (req,res) => {
    res.render('New.jsx', {
        username:req.session.currentUser
    })
});

// DELETE ROUTE
routeController.delete('/:id', authenticate, (req,res) => {

    Item.findByIdAndRemove(req.params.id, (error, item) => {
        if (error) {
            show(error)
        } else {
            res.redirect('/list')
        }
    })
})

// EDIT ROUTE
routeController.get('/:id/edit', authenticate, (req,res) => {
    Item.findById(req.params.id, (error, item) => {
        const props = {
            item: item,
            username:req.session.currentUser
        }
        res.render('Edit', props)
        // res.render('Edit.jsx', {
        //     item: item,
        //     username:req.session.currentUser
        // })
    })
})

//SEED ROUTE
routeController.get('/seed', authenticate, (req,res) => {
    // Item.create([
    //     {
    //         artist: `Adam & The Ants`,
    //         date: `1981-09-08`,
    //         location: `NYC`,
    //         listenedTo: false
    //     },
    //     {
    //         artist: `Chicago Transit Authority`,
    //         date: `1969-12-12`,
    //         location: `Concertgebouw, Amsterdam`,
    //         listenedTo: false 
    //     },
    //     {
    //         artist: `Eric Johnson-Terry Bozzio Group`,
    //         date: `2005-11-05`,
    //         location: `Ruta Maya, Austin-TX`,
    //         listenedTo: true
    //     }
    // ], (error, item) => {
    //     res.redirect('/list')
    // })
    Item.create(shows, (error, item) => {
        res.redirect('/list')
    })
})
// PUT ROUTE
routeController.put('/:id', authenticate, (req, res)=>{
    if(req.body.listenedTo === 'on'){
        req.body.listenedTo = true;
    } else {
        req.body.listenedTo = false;
    }
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, item) => {
        // res.send(item);
        // res.redirect('/list')
        res.redirect(`/list/${req.params.id}`)
    })
    // res.send(req.body);
});

// SHOW ROUTE
routeController.get('/:id', (req,res) => {
    Item.findById(req.params.id, (error, item) => {
        if (error) {
            show(error)
        } else {
            const props = {
                item: item,
                username:req.session.currentUser
            }
            res.render('Show', props)
        }
    })
})

// QUERY ROUTE
// routeController.get('/search/:query', (req,res) => {
//     const query = req.params.query;

// })

// CREATE ROUTE
routeController.post('/', authenticate, (req,res) => {
    // if (req.body.listenedTo === 'on') {
    //     req.body.listenedTo = true 
    // } else {req.body.listenedTo = false}
    // res.send(req.body)
    req.body.listenedTo = false;
    Item.create(req.body, (error, item) => {
        if (error) {
            show(error)
        } else {
            res.redirect('/list')
        }
    })
})



// EXPORTS ///
module.exports = routeController