import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { LoginPage } from "./pages/Login.jsx";
import {UsersPage} from "./pages/Users.jsx";
import Layout from "./Layout.jsx";

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