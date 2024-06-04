import Title from './components/Title.jsx';
import Offer from './components/Offer.jsx';
import offersData from './OffersData/offers.json';
function App() {
  console.log(offersData)
  return (
    <>
      <Title title="Store`s Offers" />

      <div id="offers">
        {offersData.map((offer) => {
        return <Offer key={offer.id} title={offer.name} limit={offer.limit}/>
        })}
      </div>
    </>
  );
}

export default App;