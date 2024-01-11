import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../redux/itemReducer"

export default configureStore({
  reducer: {
    items: itemReducer,
  },
})