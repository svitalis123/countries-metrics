import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './css/More.module.css';
import Loading from './Loading';
import MoreItem from './MoreItem';

export default function More() {
  const result = useSelector((state) => state[0]);
  return (
    <div className={styles.more_container}>
      <Link to="/" className={styles.more_container_link}>&#8592; back</Link>
      <div className={styles.more_container_main}>
        {
          result ? result.map((dat) => (<MoreItem key={dat.capital} pro={dat} />)) : <Loading />
        }
      </div>
    </div>
  );
}
