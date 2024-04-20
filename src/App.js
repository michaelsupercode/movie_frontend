import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { disableReactDevTools } from ‘@fvilers/disable-react-devtools’;
import './App.css';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <img style={{ width: "100%", aspectRatio: "16/6", objectFit: "cover" }} src="https://taz.de/picture/4171529/948/25015351-1Coronavirus-Kino-1.jpeg" alt="Cinema" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} /> 
          <Route path="/movie/:id" element={<MovieDetail />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
