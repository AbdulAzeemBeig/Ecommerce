import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  SAVE_SHIPPING_INFO,
  SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const addToCart = (product) => (dispatch, getState) => {
  const {
    _id,
    name,
    price,
    description,
    images,
    stock,
    quantity = 1,
  } = product;

  const imageUrls = images.map((image) => image.url);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      _id,
      name,
      price,
      description,
      images: imageUrls,
      stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
};

export const clearCart = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_CART,
  });

  localStorage.setItem("cartItems", JSON.stringify([]));
};

export const decreaseItemQuantity = (productId) => (dispatch, getState) => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload: productId,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
};

export const increaseItemQuantity =
  (productId, stock) => (dispatch, getState) => {
    const cartItems = getState().cart.items;
    const item = cartItems.find((item) => item._id === productId);
    if (item.quantity < stock) {
      dispatch({
        type: INCREASE_QUANTITY,
        payload: productId,
      });

      localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
    }
  };

export const saveShippingInfo = (data) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

// Define the savePaymentMethod action
export const savePaymentMethod = (paymentMethod) => (dispatch) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: paymentMethod,
  });
};
