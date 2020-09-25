import axios from "axios";
import { GET_ARTICLES_SUCESS, GET_ARTICLES_FAILED } from "./types";

const config = {
  headers: {
    "Content-type": "application/json",
    "Cache-Control": "no-cache",
  },
};

export const getArticles = () => async (dispatch) => {
  axios
    .get(`/api/article`, config)
    .then((res) => {
      dispatch({ type: GET_ARTICLES_SUCESS, payload: res.data.data });
    })
    .catch((error) => {
      dispatch({ type: GET_ARTICLES_FAILED, payload: error.response.data });
    });
};
