import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './layout';
import Dashboard from './pages/dashboard';
import Expenses from './pages/expenses';
import Income from './pages/income';
import Budget from './pages/budget';

const pages = [
  {
    id: 1,
    isRoot: true,
    path: '/',
    element: <Dashboard />
  },
  {
    id: 2,
    isRoot: false,
    path: '/budget',
    element: <Budget />
  },
  {
    id: 3,
    isRoot: false,
    path: '/expenses',
    element: <Expenses />
  },
  {
    id: 4,
    isRoot: false,
    path: '/income',
    element: <Income />
  }
]



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            {pages.map((p) => {
              if (p.isRoot) {
                return (
                  <Route key={p.id} index element={p.element} />
                )
              }
                return (
                  <Route key={p.id} path={p.path} element={p.element} />
                )
              })
            }
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
