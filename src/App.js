import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Discover from './pages/Discover';
import Join from './pages/Join';
// import Error404 from "./pages/Error404";

function App() {
  return (
    <body>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Join />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
