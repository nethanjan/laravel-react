import { GET_ARTICLES_FAILED, GET_ARTICLES_SUCESS } from "../actions/types";

const initialState = {
  articles: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES_SUCESS:
      return {
        articles: action.payload,
        error: null,
      };
    case GET_ARTICLES_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
