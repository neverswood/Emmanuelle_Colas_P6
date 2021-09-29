export default class Medias {
  constructor(
    id,
    photographerId,
    title,
    image,
    alt_text,
    tags,
    likes,
    date,
    price
  ) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.image = image;
    this.alt_text = alt_text;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }
}
