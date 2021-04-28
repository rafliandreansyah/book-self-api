const {
    addBookHandler, 
    getBooksHandler, 
    getBookByIdHandler, 
    editBookByIdHandler, 
    deleteBookByIdHandler
} = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: () => {}
    },
    {
        method: 'GET',
        path: '/books',
        handler: () => {}
    },
    {
        method: 'GET',
        path: '/books/{bookId}'
    },
    {
        method: 'PUT',
        path: '/books/{bookId}'
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}'
    },
]

module.exports = routes