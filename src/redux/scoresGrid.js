import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "scores",
  initialState: {
    s0: "",
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
    s10: "",
    s11: "",
    s12: "center",
    s13: "",
    s14: "",
    s15: "",
    s16: "",
    s17: "",
    s18: "",
    s19: "",
    s20: "",
    s21: "",
    s22: "",
    s23: "",
    s24: "",
  },

  reducers: {
    // actions => action handlers
    setScore: (score, action) => {
      score[action.payload.type] = action.payload.value;
    },
    setInitialscores: (score, action) => {
    score.s0= "";
    score.s1= "";
    score.s2= "";
    score.s3= "";
    score.s4= "";
    score.s5= "";
    score.s6= "";
    score.s7= "";
    score.s8= "";
    score.s9= "";
    score.s10= "";
    score.s11= "";
    score.s12= "center";
    score.s13= "";
    score.s14= "";
    score.s15= "";
    score.s16= "";
    score.s17= "";
    score.s18= "";
    score.s19= "";
    score.s20= "";
    score.s21= "";
    score.s22= "";
    score.s23= "";
    score.s24= ""

    },
  },
});

export const { setScore, setInitialscores } = slice.actions;
export default slice.reducer;
