const $postsForm = document.forms.postsForm;
const $postsContainer = document.getElementById("postsContainer");

$postsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  //   const formData = {
  //     picture: e.target.picture.value,
  //     title: e.target.title.value,
  //   };

  const formData = Object.fromEntries(new FormData(e.target));

  const response = await fetch("/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const dataFromServer = await response.json();

  const newPostHTML = createPostHTML(dataFromServer);
  $postsContainer.insertAdjacentHTML("afterbegin", newPostHTML);

  e.target.reset();
});

$postsContainer.addEventListener("click", async (e) => {
  if (e.target.hasAttribute("data-addlike")) {
    // console.log(e.target);
    const $wrapper = e.target.closest("[data-id]");
    const postId = $wrapper.dataset.id;
    // console.log(postId);

    const response = await fetch(`/posts/${postId}`, {
      method: "PATCH",
    });
    const newLikes = await response.json();
    console.log(newLikes);

    const $likes = $wrapper.querySelector("[data-likes]");
    $likes.innerText = `Likes: ${newLikes.likes}`;
  }

  if (e.target.hasAttribute("data-delete")) {
    const $wrapper = e.target.closest("[data-id]");
    const postId = $wrapper.dataset.id;
    const response = await fetch(`/posts/${postId}`, {
      method: "DELETE",
    });

    console.log("response", response);

    if (response.status === 200) $wrapper.remove();
  }
});

function createPostHTML(newPost) {
  return `
    <div data-id="${newPost._id}" class="col-4 my-2">
    <div class="card  w-100 h-100" style="width: 18rem;">
        <img src="${newPost.picture}" class="card-img-top" alt="${newPost.title}">
        <div class="card-body">
            <h5 class="card-title">${newPost.title}</h5>
            <p data-likes class="card-text">Likes: ${newPost.likes}</p>
            <button data-addlike class="btn btn-success mb-1">Нравится</button>
            <a href="/posts/${newPost._id}" class="btn btn-primary mb-1">Подробнее</a>
            <button data-delete class="btn btn-danger">Удалить</button>

        </div>
    </div>
</div>
    `;
}

// const fetchDemo = async () => {
//   const response = await fetch("/");

//   console.log(response);

//   const html = await response.text();
//   console.log(html);
// };

// fetchDemo();
