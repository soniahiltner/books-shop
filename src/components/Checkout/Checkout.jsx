import { useBooks } from "../../context/BooksContext";
import getStripe from "/lib/getStripe.js";
import styles from './Checkout.module.css';


function Checkout() {

  const { cart } = useBooks();
  let items = cart.map((item) => {
    const product = {
      price: item.id,
      quantity: item.quantity,
    };
    return product;
  });
  

  const checkoutOptions = {
    lineItems: items,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };
  //Redirect to Checkout
  const handleCheckout = async () => {
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    
  };

  return (
    <div>
      <button className={styles.checkoutBtn} onClick={(handleCheckout)}>Comprar</button>
    </div>
  );
}

export default Checkout;
