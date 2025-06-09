import css from "./ImageCarousel.module.css";

export default function ImageCarousel() {
  const imageLinks: string[] = Object.values(
    import.meta.glob("./assets/carousel/*", {
      eager: true,
      query: "url",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as Record<string, any>
  ).map((data) => data.default);

  return (
    <div className="centered-section">
      <div className={css["carousel"]}>
        {imageLinks.map((url) => (
          <img className={css["carousel__image"]} src={url} alt="" />
        ))}
      </div>
    </div>
  );
}
