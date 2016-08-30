const typeDefinitions = `
type Author {
  _id: String
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  _id: String
  title: String
  text: String
  author: Author
}
type Query {
  author(firstName: String, lastName: String): Author
  authors(limit: Int): [Author]
}
schema {
  query: Query
}
`;

export default [typeDefinitions];
