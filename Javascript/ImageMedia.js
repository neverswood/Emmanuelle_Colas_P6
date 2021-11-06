import Media from "./Data/Media.js";

export default class ImageMedia extends Media {
  constructor(
    id,
    photographerId,
    title,
    alt_text,
    tags,
    likes,
    date,
    price,
    image
  ) {
    super(id, photographerId, title, alt_text, tags, likes, date, price);
    this.image = image;
  }

  getHtml() {
    return `
      <div class="media-image">
        <img
          id="index"
          src="/Sample_photos/${this.photographerId}/${this.image}"
          alt=""
          class="image-photographerBox gallery">
      </div>`;
  }
}
