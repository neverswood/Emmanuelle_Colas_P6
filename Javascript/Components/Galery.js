import MediaFactory from "../Data/MediaFactory.js";

export default class Galery {
  create(medias, user) {
    const name = user.name.split(" ")[0].replace("-", " ");
    medias.map((media) => {
      const mediaHtml = new MediaFactory().render(media, name);
    });
  }
}
