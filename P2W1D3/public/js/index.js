const $postsForm = document.forms.postsForm;
const $postsContainer = document.getElementById("postsContainer");

$postsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  //   const formData = {
  //     title: e.target.title.value,
  //     picture: e.target.picture.value,
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

  const newPostHTML = createNewPostHTML(dataFromServer);
  $postsContainer.insertAdjacentHTML("afterbegin", newPostHTML);

  e.target.reset();
});

$postsContainer.addEventListener("click", async (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const $card = e.target.closest("[data-id]");
    console.log($card);
    const currentId = $card.dataset.id;

    const response = await fetch(`/posts/${currentId}`, {
      method: "DELETE",
    });

    const status = response.status;

    if (status === 200) {
      $card.remove();
    }
  }
});

function createNewPostHTML(post) {
  return `
  <div data-id="${post._id}" class="col-4 my-2">
  <div class="card  w-100 h-100" style="width: 18rem;">
      <img src="${post.picture}" class="card-img-top" alt="${post.title}">
      <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <a href="/posts/${post._id}" class="btn btn-primary mb-1">Подробнее</a>
          <button data-delete type="button" class="btn btn-danger">Удалить</button>
      </div>
  </div>
</div>
  `;
}

// async function demo() {

// }

// const demo = async () => {
//   const result = await fetch("/");
//   const text = await result.text();

//   console.log(text);
// };

// demo();
