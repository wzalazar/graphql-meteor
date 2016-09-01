import casual from 'casual';
import times from 'lodash/times';
import Author from '../collections/author';
import Post from '../collections/post';

Meteor.startup(function () {
  Author.remove({});
  Post.remove({});

  // create mock data with a seed, so we always get the same
  casual.seed(123);

  times(100, () => {
    return Author.insert({
      firstName: casual.first_name,
      lastName: casual.last_name,
    }, function(error, authorId) {
      if (!error) {
        let author = Author.findOne(authorId);
        Post.insert({
          title: `A post by ${author.firstName}`,
          text: casual.sentences(3),
          authorId: authorId
        });
      }
    });
  });

});
