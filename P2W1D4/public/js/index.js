const $postsForm = document.forms.postsForm;
const $postsContainer = document.querySelector("#postsContainer");

$postsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));
  console.log(formData);

  const response = await fetch("/blog/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const newPost = await response.json();
  const newPostHTML = createPostHTML(newPost);

  $postsContainer.insertAdjacentHTML("afterbegin", newPostHTML);

  e.target.reset();
});

$postsContainer.addEventListener("click", async (e) => {
  if (e.target.hasAttribute("data-like")) {
    const parentContainer = e.target.closest("[data-id]");
    const currentId = parentContainer.dataset.id;

    const response = await fetch(`/blog/${currentId}`, {
      method: "PATCH",
    });

    const status = response.status;

    if (status === 200) {
      const likesObj = await response.json();
      const { likes } = likesObj;

      const $likesCounter = parentContainer.querySelector("[data-count]");
      $likesCounter.innerHTML = `Likes: ${likes}`;
    }
  }
});

const createPostHTML = (post) => {
  return `
    <div data-id="${post._id}" class="col-4 my-2">
    <div class="card  w-100 h-100" style="width: 18rem;">
        <img src="${post.picture}" class="card-img-top" alt="${post.title}">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <div class="d-flex">
            <button data-like type="button" class="btn btn-warning mb-1 mr-1">❤️</button>
            <span data-count>Likes: ${post.like}</span>
        </div>
        <a href="/blog/${post._id}" class="btn btn-primary mb-1">More</a>
        <button data-delete type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>
</div>
    `;
};
