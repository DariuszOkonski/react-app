import React from 'react';
import Hero from '../../components/Hero/Hero';
import SearchForm from '../../components/SearchForm/SearchForm';
import List from '../../components/List/List';
import Lists from '../../components/Lists/Lists';

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <SearchForm />
      <Lists />
    </React.Fragment>
  );
}

export default Home;
