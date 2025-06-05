import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Sneaker" category="LEBARAN" />
    </div>
  );
}

function FotoProduk(){
  return (
    <div className="Foto">
      <img src="sneaker.jpg" />
    </div>
  );
}

function CheckDiscount(props){
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  }else if (isDiscount == "coming") {
    return (
      <p>akan ada Diskon ...</p>
    );
  }else{
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props){
  const { category, name, isDiscount } = props;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.309.399</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          One the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features
          lightweight, visible cushioning just like the original from '88. Signature details and
          meterials celebrate the game-changing icon</p>
          <a onClick={(e) => TambahCart(name, e)} href='#'>Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e){
  return console.log("Membeli " + e);
}

export default App;
