import css from "./ImageCarousel.module.css";

export default function ImageCarousel() {
  console.log(
    import.meta.glob("./assets/carousel/*", {
      eager: true,
      query: "url",
    })
  );
  return (
    <div className="centered-container">
      <div className={css["carousel"]}></div>
    </div>
  );
}
