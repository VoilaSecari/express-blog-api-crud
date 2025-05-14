// importo data
let { posts } = require("./data/posts.js");

// index
const index = (req, res) => {
  res.json({ posts });
};

module.exports = { index };
