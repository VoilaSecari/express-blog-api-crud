// importo data
let { posts } = require("../data/posts.js");

// index
const index = (req, res) => {
  res.json({ posts });
};

const show = (req, res) => {
  //creo costanti per navigare
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.json({
    description: "Lettura sul blog del post " + id,
    data: post,
  });
};

const store = (req, res) => {
  res.json("Creazione sul blog di un nuovo post.");
};

const update = (req, res) => {
  const id = req.params.id;
  res.json("Sostituzione sul blog del post " + id);
};

const modify = (req, res) => {
  const id = req.params.id;
  res.json("Modifica sul blog del post " + id);
};

const destroy = (req, res) => {
  const id = req.params.id;
  res.json("Eliminazione sul blog del post " + id);
};

module.exports = { index, show, store, update, modify, destroy };
