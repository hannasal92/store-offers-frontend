import { useRef,  useContext } from 'react';
import BuyModal from './BuyModal.jsx';
import Button from './Button.jsx'
import { StoreContext } from '../store/storeProvider.jsx';

export default function Offer({offer}) {
  const {buyOffer} = useContext(StoreContext)
  
  const dialog = useRef();
  
  function openDialog() {
    dialog.current.open();
  }

  async function handleBuyOffer(){
    await buyOffer(offer.id)
    dialog.current.close()
  }


  return (
    <>
      <BuyModal
        ref={dialog}
        buyOffer={handleBuyOffer}
        title={offer.title}
      />
      <section className="offer">
        <h2>{offer.title}</h2>
        <Button 
         disabled={offer.buyLeft == 0} 
         style={{cursor:(offer.buyLeft == 0)?"auto":"pointer"}} 
         onClick={openDialog}>Buy</Button>
        <p >
         Limit {offer.buyLeft}/{offer.limit}
        </p>
      </section>
    </>
  );
}