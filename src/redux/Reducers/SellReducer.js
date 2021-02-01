import { ADD_SELL_DATA, ADD_SELL_TOKEN, ADD_WALLET_SELL } from "../Actions/types";

const initialState = {
  sellUserDetails: [],
};

const SellReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_SELL_TOKEN:
        return {
          ...state,
          sellUserDetails: payload,
        };
      case ADD_WALLET_SELL:
        return {
          ...state,
          sellUserDetails: { ...state.sellUserDetails, ...payload },
        };
      case ADD_SELL_DATA:
        return {
          ...state,
          sellUserDetails: { ...state.sellUserDetails, ...payload },
        };
      default:
        return state;
    }
};

export default SellReducer;
