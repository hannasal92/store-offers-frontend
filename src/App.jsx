import Title from './components/Title.jsx';
import Offer from './components/Offer.jsx';
import { Fragment } from 'react';
import { useContext } from 'react';
import { StoreContext } from './store/storeProvider.jsx';

function App() {

  const {offers, error} = useContext(StoreContext)

  if(error){
    return (
      <Fragment>
        <Title title="Store`s Offers" />
        <h1>{error}</h1>
      </Fragment>
    )
  }

  if(offers && offers.length === 0){
    return (
      <Fragment>
        <Title title="Store`s Offers" />
        <h1>No Offers For This User</h1>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Title title="Store`s Offers" />
      <div id="offers">
        {
          !offers?
          <h1>Loading..</h1>
          :
          offers.map((offer) => {
            return <Offer key={offer.id} offer={offer}/>
          })
        }
      </div>
    </Fragment>
  );
}

export default App;