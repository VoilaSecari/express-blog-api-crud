// importo data
let posts = require("../data/posts.js").posts;

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
  const { title, content, image, tags } = req.body;

  //id generator
  let maxId = 0;
  for (const post of posts) {
    if (post.id > maxId) maxId = post.id;
  }

  const postId = maxId + 1;
  //ora il nuovo post con tutti i dati destrutturati
  const newPost = { id: postId, title, content, image, tags };

  posts.push(newPost);

  console.log(newPost);
  return res.json({
    message: "Creazione sul blog di un nuovo post.",
    data: newPost,
  });
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
