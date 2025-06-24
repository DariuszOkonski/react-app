import React from 'react';
import Hero from '../../components/Hero/Hero';
import SearchForm from '../../components/SearchForm/SearchForm';
import List from '../../components/List/List';

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <SearchForm />
      <List />
    </React.Fragment>
  );
}

export default Home;
