import Header from './page/Header';
import MenuUtama from './page/MenuUtama';
import MenuTentangKami from './page/MenuTentangKami';
import Footer from './page/Footer';
import MenuKontak from './page/MenuKontak';
import MenuMakanan from './page/MenuMakanan';

function App() {
  return (
    <div className="App">
      <Header/>
      <MenuUtama/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
    </div>
  );
}

export default App;
