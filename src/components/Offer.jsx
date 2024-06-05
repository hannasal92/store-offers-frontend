import { useRef, useState, useContext } from 'react';
import BuyModal from './BuyModal.jsx';
import Button from './Button.jsx'
import { MaxBuyQuantity } from '../store/max-buy-quantity.jsx';

export default function Offer({ title, limit }) {
  const { maxBuyQuantity, updateMaxBuyQuantity } = useContext(MaxBuyQuantity);
  const maxBuyQuantityValue = maxBuyQuantity.maxBuyQuantity ;
  const dialog = useRef();
  const[offersData, setOffersData] = useState({
    buyLeft : limit,
    limit
  });


  function buyOffer() {
    const remainBuyOffers = offersData.buyLeft - 1
    updateMaxBuyQuantity();
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

  let buyButton ;
  if(offersData.buyLeft == 0 || maxBuyQuantityValue == 0){
    buyButton = <Button disabled > Buy </Button>
  }else{
    buyButton = <Button onClick={openDialog} > Buy </Button>
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

        <p>
          {buyButton}
        </p>
        <p >
         Limit {offersData.buyLeft}/{offersData.limit}
        </p>
      </section>
    </>
  );
}