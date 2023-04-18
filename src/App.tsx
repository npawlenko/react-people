import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Views from './pages/Views';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Main/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/views" element={<Views/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
