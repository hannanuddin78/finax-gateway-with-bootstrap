import { ADD_SELL_DATA, ADD_SELL_TOKEN, ADD_WALLET_SELL } from "./types";

//SET SELECT NAME
export const getSelectedToken = (SELLUserDetails) => async (dispatch) => {
  const result = await SELLUserDetails;
  dispatch({
    type: ADD_SELL_TOKEN,
    payload: {token : result},
  });
};

export const getSellWallet = (SELLUserDetails) => async (dispatch) => {
  const result = await SELLUserDetails;
  dispatch({
    type: ADD_WALLET_SELL,
    payload: { wallet: result },
  });
};
export const getSellDataAll = (SELLUserDetails) => async (dispatch) => {
  const result = await SELLUserDetails;
  dispatch({
    type: ADD_SELL_DATA,
    payload: result,
  });
};
