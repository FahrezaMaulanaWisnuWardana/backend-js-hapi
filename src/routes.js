const {
  addBook,
  getBook,
  detailBook,
  editBook,
  deleteBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBook,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: detailBook,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBook,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook,
  },
];
module.exports = routes;