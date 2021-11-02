import Media from "./Data/Media.js";

export default class VideoMedia extends Media {
  constructor(
    id,
    photographerId,
    title,
    alt_text,
    tags,
    likes,
    date,
    price,
    video
  ) {
    super(id, photographerId, title, alt_text, tags, likes, date, price);
    this.video = video;
  }
  getHtml() {
    return `
      <div class="media-video">
      <video id="video">
      <source type="video/mp4" src="/Sample_photos/${this.photographerId}/${this.video}"
      alt="">
      </video>
      </div>`;
  }
}
