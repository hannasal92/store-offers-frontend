import Title from './components/Title.jsx';
import Offer from './components/Offer.jsx';
import offersData from './OffersData/offers.json';
import { useState } from 'react';
import { MaxBuyQuantity } from './store//max-buy-quantity.jsx'

function App() {

  const [maxQuantity, setMaxBuyQuantity] = useState({
    maxBuyQuantity: 5,
  });

  function handleMaxBuyQuantity() {
    const updatedMaxBuyQuantity = maxQuantity.maxBuyQuantity - 1 ;
    setMaxBuyQuantity( () => {
         return {
          maxBuyQuantity : updatedMaxBuyQuantity
        }
    } );
  }

  const maxBuyValue = {
    maxBuyQuantity: maxQuantity,
    updateMaxBuyQuantity: handleMaxBuyQuantity,
  };

  const maxBuyQuantityTitle = "Max Buy Quantity = " +maxQuantity.maxBuyQuantity

  return (
    <MaxBuyQuantity.Provider value={maxBuyValue}>
      <Title title="Store`s Offers" />
      <Title title= {maxBuyQuantityTitle}/>
      <div id="offers">
        {offersData.map((offer) => {
        return <Offer key={offer.id} title={offer.name} limit={offer.limit}/>
        })}
      </div>
    </MaxBuyQuantity.Provider>
  );
}

export default App;