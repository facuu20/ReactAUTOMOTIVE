import Contador from './contador';
import Products from '../src/products';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenido a MotorSport HOUSE' />
      <Contador/>
      <Products title='Ducatti Panigale v2' img='https://a.mcdn.es/mnet/contents/media/ducati/1150594.jpg/900x505cut/' description='Agil y potente el monstruo italiano' price='38.000U$D' />
      <Products title='Pagani Zonda' img='https://media.autoexpress.co.uk/image/private/s--106N062Y--/v1669392371/evo/2022/11/Pagani%20Zonda%20F%20review%20main.jpg' description='La Gioconda de los hypercar' price='3.200.000U$D' />
      <Products title='Dodge RAM TRX' img='https://assets.newatlas.com/dims4/default/a3693e5/2147483647/strip/true/crop/4032x2272+0+0/resize/2880x1623!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F47%2Ff3%2F7f7a479b4215ba4dbdb932a9b4e9%2F2021-ram-1500-trx-15.jpg' description='Con su motor HEMI V8 supercargado todos los terrenos le temen' price='220.000U$D' />
    </div>
  );
}

export default App;
