import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <img
        src={getImageUrl("hero/g.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Salma Mokhtaar</h1>
        <p className={styles.description}>
      I am a fullstack developer passionate about creating robust and scalable web applications. My expertise spans both frontend and backend technologies, allowing me to design and implement end-to-end solutions.
        </p>
        <a href="salmamuqtaarsiman@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
    
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
