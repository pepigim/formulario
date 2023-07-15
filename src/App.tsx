//import Intercambiar from './components/Intercambiar';
import { Provider } from 'react-redux';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ShowData from './components/ShowData';
import { store } from './store/store';

function App() {
  return (
    <>
         {/* PARA PROBAR EL PRIMER EJERCICIO SOLO COMENTAR TODO EL PROVIDER Y DESCOMENTAR 
         EL COMPONENTE INTERCAMBIAR */}
          {/* <Intercambiar/> */}
          <Provider store={store}>
            <h1 className='text-center'>Formulario CRUD</h1>
            <br/>
                <ShowData/>
          </Provider>
           
    </>
  );
}

export default App;
