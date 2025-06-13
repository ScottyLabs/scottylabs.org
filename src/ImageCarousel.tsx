import css from "./ImageCarousel.module.css";
import { getAllImageLinksInAssetDirectory } from "./utils/files";

export default function ImageCarousel() {
  const imageLinks = getAllImageLinksInAssetDirectory("carousel-images");

  return (
    <section className="centered-section">
      <div className={css["carousel"]}>
        {imageLinks.map((url) => (
          <img className={css["carousel__image"]} src={url} key={url} alt="" />
        ))}
      </div>
    </section>
  );
}
