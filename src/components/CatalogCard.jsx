import styles from "./modules/Landing.module.css";

export default function CatalogCard({ catalog }) {
  console.log("catalog in card", catalog);

  //   const eachCardInfo = catalog.find((card) => card);

  //   console.log(eachCardInfo);

  return (
    <div className={styles.card}>
      <img
        src="https://www.native-instruments.com/typo3temp/pics/img-homepage-izo-std-sale-hp-tile-l2-0aeb7045c274b78b2265a829abc768a2-d.jpg"
        alt="img"
        width={400}
      />
      <h3>Audio Essentials month</h3>
      <p>
        Step into a creative effects playground with new amps, pedals, and lo-fi
        flavor.
      </p>
    </div>
  );
}
