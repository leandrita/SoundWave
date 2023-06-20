import './App.css';
import MainIndex from './components/MainIndex';
import Header from './components/Header';
import Footer from './components/Footer';
import MainDiscovers from './components/MainDiscovers';


function App() {
  return (
    <body>
      <Header />
      <MainDiscovers/>
      <MainIndex />
      {/* <Footer /> */}
    </body>
  );
}

export default App;
