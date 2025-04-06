import { useEffect } from 'react';
import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';

import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, setDrawer, removeFromBasket } from './redux/slices/basketSlice';
import { getAllProducts } from './redux/slices/productSlice'; // ürünleri çekmek için

import Slide from './components/Slide';
import Footer from './components/Footer';

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
    dispatch(getAllProducts()); // ürünleri çek
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <Slide /> {/* Carousel bileşeni */}
        <RouterConfig />
        <Loading />
        <Drawer
          className='drawer'
          sx={{ padding: '20px', width: '400px' }}
          onClose={() => dispatch(setDrawer())}
          anchor='right'
          open={drawer}
        >
          {products && products.map((product) => (
            <div key={product.id}>
              <div className='flex-row' style={{ padding: '20px' }}>
                <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                <p style={{ width: '320px', marginRight: '5px' }}>{product.title} ({product.count})</p>
                <p style={{ fontWeight: 'bold', marginRight: '9px', width: '60px' }}>{product.price}₺</p>
                <button
                  onClick={() => {
                    const confirmed = window.confirm('Are you sure you want to delete this item?');
                    if (confirmed) {
                      dispatch(removeFromBasket(product.id));
                      dispatch(calculateBasket());
                    }
                  }}
                  style={{
                    padding: '6px',
                    borderRadius: '5px',
                    backgroundColor: 'rgb(185, 76, 76)',
                    border: 'none',
                    color: '#fff',
                    width: '60px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="total-box">
            <p style={{ textAlign: 'center' }}>Total Amount : {totalAmount.toFixed(2)}₺</p>
          </div>
        </Drawer>

      </PageContainer>
      <Footer />
    </div>
  );
}

export default App;