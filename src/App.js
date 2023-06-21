import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import React from 'react';
import MainIndex from './components/MainIndex';
import MainJoin from './components/MainJoin';
// import Header from './components/Header';
import MainDiscovers from './components/MainDiscovers';

// const Home = () => <MainIndex></MainIndex>

// const Discover = () => <MainDiscovers>Discover</MainDiscovers>

// const Join = () => <MainJoin>Join</MainJoin>

const App = () => {
  // const [route, setRoute] = useState('');

  // const renderComponent = () => {
  //   switch (route) {
  //     case 'discovers':
  //       return <MainDiscovers />;
  //     case 'index':
  //       return <MainIndex />;
  //     case 'join':
  //       return <MainJoin />;
  //     default:
  //       return <MainIndex />;
  //   }
  // };

     return (
      <BrowserRouter>
        <header>
          <Link to='/'>
            Home
          </Link>
          <Link to='/MainDiscovers'>
            Discover
          </Link>
          <Link to='/MainJoin'>
            Join
          </Link>
        </header>


        <switch>
        <Route path='/'>
          <MainIndex />
        </Route>
        <Route path='/MainDiscovers'>
          <MainDiscovers />
        </Route>
        <Route path='/MainJoin'>
          <MainJoin />
        </Route>
        </switch>
      </BrowserRouter>
     )
  }

//   return (
//     <div className="App">
//       <Header/>
//       <nav>
//         <ul>
//           <li onClick={() => setRoute('discovers')}>Discovers</li>
//           <li onClick={() => setRoute('index')}>Index</li>
//           <li onClick={() => setRoute('join')}>Join</li>
//         </ul>
//       </nav>
//       {renderComponent()}
//     </div>
//   );
// }
      
export default App;
