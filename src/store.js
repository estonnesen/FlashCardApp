import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // this stores the actions that we've created in each slice
    toggle: false
  }
})

export default store
