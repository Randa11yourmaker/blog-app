// модель отвечает за хранение данных
class Model {
  constructor({ onPostsChanged }) {
    this.posts = [];
    this.isError = false;
    this.onPostsChanged = onPostsChanged;
  }

  addPost(title, description) {
    if (this._isPostValid(title)) {
      this.isError = false;

      this.posts.push({
        title,
        description,
        timestamp: Date.now(),
      });
    } else {
      this.isError = true;
    }
    // при создании нового поста, модель сообщает
    // об изменениях и вызывает метод, логика которого
    // описана в другом  месте
    this.onPostsChanged(this.posts, this.isError);
  }

  getPosts() {
    return this.posts;
  }

  _isPostValid(title) {
    return title.length < 100;
  }
}
