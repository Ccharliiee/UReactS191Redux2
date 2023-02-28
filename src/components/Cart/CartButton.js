import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/uiSlice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatchCartUI = useDispatch();
  const cartTotalQuantity = useSelector(
    (state) => state.cartReducer.totalQuantity
  );
  const cartTotalPrice = useSelector((state) =>
    state.cartReducer.totalPrice.toFixed(2)
  );

  const toggleCartHandler = () => {
    dispatchCartUI(uiActions.toggleCart());
  };
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
      <span className={classes.badge}>${cartTotalPrice}</span>
    </button>
  );
};

export default CartButton;
