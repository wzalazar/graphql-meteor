import Author from '../collections/author';
import Post from '../collections/post';

const Resolvers = {
  Query: {
    author(root, args) {
      return Author.findOne(args);
    },
    authors(root, limit) {
      return Author.find({}, limit).fetch()
    }
  },
  Author: {
    posts(author) {
      return Post.find({ authorId: author._id }).fetch();
    }
  },
  Post: {
    author(post) {
      return Author.findOne(post.authorId);
    }
  }
};

export default Resolvers;
