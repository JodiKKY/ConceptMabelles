import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/layout.jsx';
import { CartProvider } from './components/CartContext.jsx';  // ✅ Import CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>  {/* ✅ Wrap with CartProvider */}
        <Layout>
          <App />
        </Layout>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
