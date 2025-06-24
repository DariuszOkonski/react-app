import Container from './components/Container/Container';
import Hero from './components/Hero/Hero';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
  );
}

export default App;
