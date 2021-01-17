
import './App.css';
import AddForm from './component/addProductForm'
import ProductList from './component/ProductList'
function App() {
  return (
    //design 
      
      <div className='container'> 
         <div className='d-flex justify-content-center mt-5' > 
          <div >
            <div>
                <AddForm/>
            </div>
            <div className='border'>
                <ProductList />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
