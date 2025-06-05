import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="Parentbox">
    </div>
  );
}

function FotoProduk(){
  return (
    <div className="Foto">
      <img className="sneaker.jpg" />
    </div>
  );
}
function ProdukInfo(){
  const category = "HOLIDAY";
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">Pinky Swag</h1>
        <p className="Price">IDR 73.309.399</p>
        <p className="Info">
          One the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features
          lightweight, visible cushioning just like the original from '88. Signature details and
          meterials celebrate the game-changing icon</p>
      </div>
    </div>
  );
}

export default App;
