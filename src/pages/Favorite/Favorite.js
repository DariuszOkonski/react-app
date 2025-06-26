import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';

function Favorite() {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div>
        {favoriteCards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
