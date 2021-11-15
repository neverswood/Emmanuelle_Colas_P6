import Photographer from "./Photographer.js";
import ImageMedia from "../ImageMedia.js";
import VideoMedia from "../VideoMedia.js";

export default class DataStore {
  constructor(data) {
    this.photographers = data.photographers.map(
      (photographerObject) =>
        new Photographer(
          photographerObject.name,
          photographerObject.id,
          photographerObject.city,
          photographerObject.country,
          photographerObject.tags,
          photographerObject.tagline,
          photographerObject.price,
          photographerObject.portrait
        )
    );

    this.medias = data.medias.map((mediaObject) => createMedia(mediaObject));
  }
}

// Factory Pattern //
function createMedia(mediaObject) {
  if ("image" in mediaObject) {
    return new ImageMedia(
      mediaObject.id,
      mediaObject.photographerId,
      mediaObject.title,
      mediaObject.alt_text,
      mediaObject.tags,
      mediaObject.likes,
      mediaObject.date,
      mediaObject.price,
      mediaObject.image
    );
  } else if ("video" in mediaObject) {
    return new VideoMedia(
      mediaObject.id,
      mediaObject.photographerId,
      mediaObject.title,
      mediaObject.alt_text,
      mediaObject.tags,
      mediaObject.likes,
      mediaObject.date,
      mediaObject.price,
      mediaObject.video
    );
  } else {
    throw new Error("Unknown media type");
  }
}
