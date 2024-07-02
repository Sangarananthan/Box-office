import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './Components/MainLayout';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalThemeProvider } from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
            <Route path="/shows/:showid" element={<Show />} />
            <Route path="*" element={<h2>Page not found 404 :)</h2>} />
          </Routes>
        </HashRouter>
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
