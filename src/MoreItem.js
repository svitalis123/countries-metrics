import React from 'react';
import styles from './css/MoreItem.module.css';

/* eslint-disable */
export default function MoreItem({pro}) {
  return (
    <div className={styles.moreitem_container}>
      <figure className={styles.moreitem_container_figure}><img src={pro.flag} alt="country"/></figure>
      <article className={styles.moreitem_container_article}>
        <b>Area</b>
        <h4><i>{pro.area}</i></h4>
        <b>Population</b>
        <p><i>{pro.population}</i></p>
      </article>
    </div>
  );
}
