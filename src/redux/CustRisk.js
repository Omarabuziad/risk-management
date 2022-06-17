import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "customerRisk",
  initialState: {
    I0 : "",
    I1 : "",
    I2 : "",
    I3 : "",
    I4 : "",
    I5 : "",
    I6 : "",
    I7 : "",
    I8 : "",
    I9 : "",
    I10 : "",
    I11 : "",
    I12 : "",
    I13 : "",
    I14 : "",
    I15 : "",
    I16 : "",
  },
  reducers: {
    // actions => action handlers
    setItemState: (state, action) => {
      state[action.payload.type] = action.payload?.value;
    },
    removeLoginState: (state, action) => {
      state.isLogin = false;
      state.role = "";
    },
  },
});

export const { setItemState } = slice.actions;
export default slice.reducer;
