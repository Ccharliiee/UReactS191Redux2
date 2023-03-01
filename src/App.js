import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import {
  sendCartData2API,
  fetchCartDataFromAPI,
} from "./store/cartHttpActions";

import useHttp from "./components/hooks/useHttp";

import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const {
    // isLoading,
    error: gError,
    sendRequest: fetchCartDataRequest,
  } = useHttp();
  const {
    // isLoading,
    error: pError,
    sendRequest: putCartDataRequest,
  } = useHttp();

  const notification = useSelector((state) => state.uiReducer.notification);
  const showCart = useSelector((state) => state.uiReducer.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartDataFromAPI(fetchCartDataRequest, gError));
  }, [dispatch, fetchCartDataRequest, gError]);

  useEffect(() => {
    if (!cart || cart.totalQuantity === 0) {
      return;
    }

    dispatch(sendCartData2API({ cart, putCartDataRequest, pError }));
  }, [cart, dispatch, pError, putCartDataRequest]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
