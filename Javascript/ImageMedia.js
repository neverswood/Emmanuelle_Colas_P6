import Media from "./Medias.js";

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
}
