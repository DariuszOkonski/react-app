import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About/About';
import Favorite from './pages/Favorite/Favorite';
import Home from './pages/Home/Home';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </main>
  );
}

export default App;
