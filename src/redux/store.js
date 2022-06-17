import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";


export const store = configureStore({
  reducer,
})


// export default function () {
//   return configureStore({
//     reducer,
//   });
// }
