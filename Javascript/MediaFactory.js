import ImageMedia from "./ImageMedia.js";
import VideoMedia from "./VideoMedia.js";

export default class MediaFactory {
  render(element) {
    let media;
    if (element.hasOwnProperty("image")) {
      media = new ImageMedia().getHtml();
    } else {
      console.log("log", new VideoMedia().getHtml());
      media = new VideoMedia().getHtml();
    }
    // return media.getHtml();
  }
}
