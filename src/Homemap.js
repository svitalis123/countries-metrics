import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountry } from './redux/countries/CountryReducer';
import styles from './css/Homemap.module.css';
/* eslint-disable */
export default function Homemap({ datas }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.homemap_container}>
        <figure>
          <Link to='/more' onClick={() => dispatch(fetchCountry(datas.name))} className={styles.homemap_container_divs_inside_p}>&#8594;</Link>
          <img src={datas.image} alt={datas.name}/>
          <h3>{datas.name}</h3>
        </figure>
    </div>
  );
}
