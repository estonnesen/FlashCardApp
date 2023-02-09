import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
}

const textSlice = createSlice({
  name: 'text',
  initialState,

  reducers: {
    setTextToggle: (state, action)=>{
      state.value = !state.value
    }
  }
})

export const { setTextToggle } = textSlice.actions

export default textSlice.reducer
