const book = {
    isbn:'',
    author:'',
    tags: ['',''],
    borrows: [{
        student:'',
        dueDate: Date
    }]
}

// Create index on the dueDate
db.books.createIndex({'borrows.dueDate': 1})

// Search for books that are overdued
db.books.find({'borrows.dueDate':{'$lt':new Date()}}).explain();