import React, { useEffect, useState } from 'react';
import data from './data';
import styles from './css/Home.module.css';
import Homemap from './Homemap';

function Home() {
  const [search, setSearch] = useState('');
  const [newdata, setNewdata] = useState(data);
  useEffect(() => {
    if (search === '') {
      setNewdata(data);
    } else {
      const regexpress = new RegExp(search, 'i');
      setNewdata(data.filter((ite) => regexpress.test(ite.name) === true));
    }
  }, [search]);
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
        <input
          value={search}
          className={styles.home_container_items_select}
          onChange={(e) => setSearch(e.target.value.trim())}
          placeholder="Search by name any continent"
        />
        <div className={search === '' ? styles.home_container_items_div : styles.home_container_items_div2}>
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
