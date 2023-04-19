
import { useBooks } from "../../context/BooksContext";

//Product

/* const item = {
  price: process.env.price_id,
  quantity: 1
};
 */
let items = [];

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

//Button
/* <button className="checkout-button" onclick={handleCheckout}> */