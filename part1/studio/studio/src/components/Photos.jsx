import styles from "./Description.module.css";

export default function RecipePhoto() {
  return (
    <img
      src="https://www.justonecookbook.com/wp-content/uploads/2020/08/Teriyaki-Sauce-3014-II.jpg"
      alt="Photo of Chen's Teriyaki sauce in a mason jar."
      className={styles.imageUpdates}
      height={800}
      width={600}
    />
  );
}
