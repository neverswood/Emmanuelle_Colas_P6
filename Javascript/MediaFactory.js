import ImageMedia from "./ImageMedia.js";
import VideoMedia from "./VideoMedia.js";

export default class MediaFactory {
  render(element) {
    let media;
    if (element.hasOwnProperty("image")) {
      media = new ImageMedia();
    } else {
      media = new VideoMedia();
    }
    return media.createElement(element);
  }
}
