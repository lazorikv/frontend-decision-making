import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { LoginPage } from "./pages/Login";
import {UsersPage} from "./pages/Users";
import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/users" element={<UsersPage />} />
              <Route path="/" element={<App />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  </Provider>,
);