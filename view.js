class View {
  constructor({ onNewPost }) {
    this.postsNode = document.querySelector("#posts");
    this.titleInputNode = document.querySelector("#title-input");
    this.descriptionInputNode = document.querySelector("#description-input");
    this.btnNode = document.querySelector("#add-post-btn");
    this.errorNode = document.querySelector("#error");

    this.onNewPost = onNewPost;

    this.btnNode.addEventListener("click", this._handleBtnClick);
  }

  renderPosts(posts, isError) {
    this.postsNode.innerHTML = "";
    this.errorNode.innerText = "";

    if (isError) {
      this.errorNode.innerText = "Ошибка ввода";
    }

    posts.forEach((post) => {
      this.postsNode.innerHTML += `
        <div class="post">
          <p class="post-time">${this._buildDateString(post.timestamp)}</p>
          <p class="post-title">${post.title}</p>
          <p class="post-description">${post.description}</p>
        </div>
      `;
    });
  }

  // стрелочная функция позволяет правильно обращаться к переменной
  // через .this
  _handleBtnClick = () => {
    const title = this.titleInputNode.value;
    const description = this.descriptionInputNode.value;

    this.onNewPost(title, description);
  };

  _buildDateString(timestamp) {
    const date = new Date(timestamp);
    return `0${date.getDate()}.0${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
}
