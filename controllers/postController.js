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
  const postId = parseInt(req.params.id);
  const originalPost = posts.find((post) => post.id === postId);

  if (!originalPost) {
    res.status(404);

    res.json({
      error: "404 Not Found",
      message: "Post non trovato",
    });
  }
  const { title, content, image, tags } = req.body;

  const updatedPost = { id: postId, title, content, image, tags };

  const originalPostIndex = posts.indexOf(originalPost);

  posts.splice(originalPostIndex, 1, updatedPost);

  res.status(200);
  res.json({
    message: "Post con id " + postId + " correttamente sostituito.",
    data: updatedPost,
  });
};

const modify = (req, res) => {
  const postId = parseInt(req.params.id);
  res.json("Modifica sul blog del post " + id);
};

const destroy = (req, res) => {
  const id = req.params.id;
  res.json("Eliminazione sul blog del post " + id);
};

module.exports = { index, show, store, update, modify, destroy };
