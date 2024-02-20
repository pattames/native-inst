import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "./modules/Landing.module.css";
import { createClient } from "contentful";
import CatalogCard from "./CatalogCard";

//Patricio
export default function Landing() {
  const client = createClient({
    space: "snc9ypjoto09",
    accessToken: "8xleQ_2CFlvZjKRsMi0UNdrB5Ak1LPZGvx5UquSaclY",
  });

  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    const getCatalog = async () => {
      const entryItems = await client.getEntries();
      console.log(entryItems.items);
      setCatalog(entryItems.items);
    };

    getCatalog();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <video src="/Trimmed.mp4" autoPlay muted loop></video>
      </div>
      <div className={styles.catalog}>
        {catalog.map((card) => (
          <CatalogCard key={card.sys.id} card={card} />
        ))}
      </div>
      <div className={styles.products}></div>
    </>
  );
}
