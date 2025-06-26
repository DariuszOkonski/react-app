import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import styles from './Favorite.module.scss';
import { Navigate } from 'react-router-dom';

function Favorite() {
  const favoriteCards = useSelector(getFavoriteCards);

  if (!favoriteCards.length) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.favoriteContainer}>
        {favoriteCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
