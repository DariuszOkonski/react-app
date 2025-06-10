import Container from './components/Container/Container';
import Hero from './components/Hero/Hero';
import List from './components/List/List';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
}

export default App;
