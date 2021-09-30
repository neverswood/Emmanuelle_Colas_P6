export default class Media {
  constructor(id, photographerId, title, alt_text, tags, likes, date, price) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.alt_text = alt_text;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }
}
