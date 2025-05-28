import logo from './logo.svg';
import './App.css';

function App() {

  const category = "RUNNING";
  const price = 74000000;

  return (
    <div class="Parentbox">
      <div class="Foto">
        <img src="sneaker.jpg" />
      </div>
      <div class="Deskripsi">
        <p class="Cate">{category}</p>
        <h1 class="Title">Pinky Swag</h1>
        <p class="Price">IDR {price}</p>
        <p class="Info">
          One the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features
          lightweight, visible cushioning just like the original from '88. Signature details and
          meterials celebrate the game-changing icon</p>
      </div>
    </div>
  );
}

export default App;
