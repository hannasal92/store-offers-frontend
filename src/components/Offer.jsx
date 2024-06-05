import { useRef, useState, useContext } from 'react';
import BuyModal from './BuyModal.jsx';
import Button from './Button.jsx'
import { StoreContext } from '../store/storeProvider.jsx';

export default function Offer({ title, limit }) {
  const {maxQuantity,handleMaxBuyQuantity} = useContext(StoreContext)
  
  const dialog = useRef();
  const[offersData, setOffersData] = useState({
    buyLeft : limit,
    limit
  });


  function buyOffer() {
    const remainBuyOffers = offersData.buyLeft - 1
    handleMaxBuyQuantity();
    setOffersData((prevOfferData) => {
      return {
        ...prevOfferData,
        buyLeft : remainBuyOffers
      }
    })
    dialog.current.close();

  }

  function openDialog() {
    dialog.current.open();
  }


  return (
    <>
      <BuyModal
        ref={dialog}
        buyOffer={buyOffer}
        title={title}
      />
      <section className="offer">
        <h2>{title}</h2>
        <Button 
         disabled={offersData.buyLeft == 0 || maxQuantity == 0} 
         style={{cursor:(offersData.buyLeft == 0 || maxQuantity == 0)?"auto":"pointer"}} 
         onClick={openDialog}>Buy</Button>
        <p >
         Limit {offersData.buyLeft}/{offersData.limit}
        </p>
      </section>
    </>
  );
}