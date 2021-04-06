import React from 'react';
import styles from './Hero.scss';

<header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img src={props.image} className={styles.image}/>
  </header>

export default Hero;