import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./reducers/textReducer";

const store = configureStore({
  reducer: {
    // this stores the actions that we've created in each slice
    textToggle: textReducer
  }
})

export default store
