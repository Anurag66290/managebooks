import mongoose from 'mongoose';

const BooksSchema = new mongoose.Schema({
    title: {
        type: String,
      },
      author: {
        type: String,
      },
      summary: {
        type: String,
      },
});

const Books = mongoose.model('Books', BooksSchema);

export default Books;
