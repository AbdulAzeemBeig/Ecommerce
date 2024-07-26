import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  SAVE_SHIPPING_INFO,
  SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
  paymentMethod: "PayPal",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === existingItem._id ? newItem : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
