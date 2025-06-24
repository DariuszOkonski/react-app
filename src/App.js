import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </main>
  );
}

export default App;
