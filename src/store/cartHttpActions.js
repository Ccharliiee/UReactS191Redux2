import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const fetchCartDataFromAPI = (fetchCartDataRequest, gError) => {
  return (dispatch) => {
    fetchCartDataRequest({
      url: process.env.REACT_APP_Cart1API,
      rpLoader: (cartData) => {
        dispatch(
          cartActions.reloadCart({
            items: cartData?.items || [],
            totalQuantity: cartData?.totalQuantity || 0,
            totalPrice: cartData?.totalPrice || 0,
          })
        );
      },
      fMsg: "Could not fetch cart data!",
    });
    if (gError) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `Fetching cart data failed! ${gError} `,
        })
      );
    }
  };
};

export const sendCartData2API = (cartData, putCartDataRequest, pError) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    putCartDataRequest({
      url: process.env.REACT_APP_Cart1API,
      method: "PUT",
      body: {
        items: cartData.items,
        totalQuantity: cartData.totalQuantity,
        totalPrice: cartData.totalPrice,
      },
      fMsg: "Could not send cart data!",
    });

    if (pError) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `Sending cart data failed! ${pError} `,
        })
      );
    } else {
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    }
  };
};
