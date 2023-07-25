import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { MainPage } from './pages/mainPage/MainPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};
