import { Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About/About';
import Favorite from './pages/Favorite/Favorite';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
