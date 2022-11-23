import React, { useEffect, useState } from 'react';
import data from './data';
import styles from './css/Home.module.css';
import Homemap from './Homemap';

function Home() {
  const [continent, setContinent] = useState('All');
  const [newdata, setNewdata] = useState(data);
  useEffect(() => {
    if (continent === 'All') {
      setNewdata(data);
    } else {
      setNewdata(data.filter((ite) => ite.name === continent));
    }
  }, [continent]);
  return (
    <div className={styles.home_container}>
      <div className={styles.home_container_world_div}>
        <figure className={styles.home_container_world_div_figure}>
          <img src="/assets/world_map.svg" alt="world" />
        </figure>
        <h2>
          The Whole World
        </h2>
      </div>
      <div>
        <select
          value={continent}
          className={styles.home_container_items_select}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="All">Select Continent</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
        <div className={continent === 'All' ? styles.home_container_items_div : styles.home_container_items_div2}>
          {
            newdata.map((item) => (
              <Homemap
                key={item.id}
                datas={item}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
