import Title from './components/Title.jsx';
import Offer from './components/Offer.jsx';
import { useEffect, useState } from 'react';
import { MaxBuyQuantity } from './store//max-buy-quantity.jsx'
import {getOffers} from './data/axios.js'

function App() {

  const [maxQuantity, setMaxBuyQuantity] = useState({
    maxBuyQuantity: 5,
  });
  const [offers,setOffers] = useState(null)

  useEffect(()=>{
    const fetchOffers = async()=>{
      const {maxQuantity,offers} = await getOffers()
      setMaxBuyQuantity(()=>{
        return {
          maxBuyQuantity:maxQuantity
        }
      })
      setOffers(offers)
    }
    fetchOffers()
  },[])

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
        {
          !offers?
          <h1>Loading..</h1>
          :
          offers.map((offer) => {
            return <Offer key={offer.id} title={offer.name} limit={offer.limit}/>
            })
        }
      </div>
    </MaxBuyQuantity.Provider>
  );
}

export default App;