/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    static protoTypes = {
      title: PropTypes.string,
      addCard: PropTypes.func,
    }
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText}
            action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;