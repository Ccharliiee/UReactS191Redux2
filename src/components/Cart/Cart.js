import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const cartTotalPrice = useSelector((state) =>
    state.cartReducer.totalPrice.toFixed(2)
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              price: item.price,
              quantity: item.quantity,
              total: item.totalPrice,
            }}
          />
        ))}
      </ul>
      <h3>TotalPrice: ${cartTotalPrice}</h3>
    </Card>
  );
};

export default Cart;
