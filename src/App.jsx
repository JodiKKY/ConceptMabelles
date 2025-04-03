import AppRoutes from './routes/AppRoutes'; 
import { CartProvider } from './components/CartContext'; 

function App() {
  return (
      <div className='overflow-x-hidden'>
        <AppRoutes />
      </div>

  );
}

export default App;
