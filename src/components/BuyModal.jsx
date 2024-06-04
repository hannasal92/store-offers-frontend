import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx'
const BuyModal = forwardRef(function BuyModal(
  { buyOffer, title },
  ref
) {
  const dialog = useRef();
  function closeDialog() {
    dialog.current.close();
  }
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },

    };
  });

  return createPortal(
    <dialog ref={dialog} className="buy-modal">
       <h2>Are You Sure You Want To Buy This {title} ?</h2>
      <div method="dialog" >
      <Button onClick={buyOffer}> Buy Offer </Button>
      <Button onClick={closeDialog}> Close </Button>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
});

export default BuyModal;