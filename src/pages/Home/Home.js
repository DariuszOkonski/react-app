import React from 'react';
import Hero from '../../components/Hero/Hero';
import SearchForm from '../../components/SearchForm/SearchForm';
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
