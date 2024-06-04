import { useRef } from 'react';
import BuyModal from './BuyModal.jsx';
import Button from './Button.jsx'

// let timer;

export default function Offer({ title, limit }) {
  const dialog = useRef();

  function buyOffer() {
    console.log("Buy Offer");
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

        <p>
          <Button onClick={openDialog}> Buy </Button>
        </p>
        <p >
         Limit {limit}/{limit}
        </p>
      </section>
    </>
  );
}