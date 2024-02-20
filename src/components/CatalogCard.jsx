import styles from "./modules/Landing.module.css";

export default function CatalogCard({ card }) {
  console.log("catalog in card", card);

  //   const eachCardInfo = catalog.find((card) => card);

  //   console.log(eachCardInfo);

  return (
    <div className={styles.card}>
      <img src={card.fields.image.fields.file.url} alt="img" width={400} />
      <h3>{card.fields.title}</h3>
      <p>{card.fields.description}</p>
    </div>
  );
}
