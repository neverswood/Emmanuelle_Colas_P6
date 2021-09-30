import Media from "./Medias.js";

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
}
