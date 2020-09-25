import { combineReducers } from "redux";
// import { reducer as reduxForm } from "redux-form";
import articlesReducer from "./articlesReducer";

export default combineReducers({
  //   form: reduxForm,
  articles: articlesReducer,
});
