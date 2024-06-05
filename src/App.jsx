import Title from './components/Title.jsx';
import Offer from './components/Offer.jsx';
import { Fragment } from 'react';
import { useContext } from 'react';
import { StoreContext } from './store/storeProvider.jsx';

function App() {

  const {maxQuantity,offers} = useContext(StoreContext)

  const maxBuyQuantityTitle = "Max Buy Quantity = " + maxQuantity

  return (
    <Fragment>
      <Title title="Store`s Offers" />
      <Title title= {maxBuyQuantityTitle}/>
      <div id="offers">
        {
          !offers?
          <h1>Loading..</h1>
          :
          offers.map((offer) => {
            return <Offer key={offer.id} title={offer.name} limit={offer.limit}/>
          })
        }
      </div>
    </Fragment>
  );
}

export default App;