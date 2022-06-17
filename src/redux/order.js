import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "orders",
  initialState: {
    red: "",
    green: "",
    silver: "",
    blue: "",
    gold: "",
    black: "",
    sampler: false,
    starterPack: false,
    displayCase: "",
    totalCards: "",
    subTotal: "",
    volumeDiscount: "",
    shipping: 50,
    tax: "",
    donation: "",
    total: "",
  },

  reducers: {
    // actions => action handlers
    customOrder: (order, action) => {
      order[action.payload.type] = action.payload.value;
    },
    setInitialOrder: (order, action) => {
      order.red = "";
      order.green = "";
      order.silver = "";
      order.blue = "";
      order.gold = "";
      order.black = "";

      order.sampler = false;
      order.starterPack = false;
      order.displayCase = "";

      order.totalCards = "";
      order.subTotal = "";
      order.volumeDiscount = "";
      order.shipping = 50;
      order.tax = "";
      order.donation = "";

      order.total = "";
    },
    samplerOrder: (order, action) => {
      order.red = 2;
      order.green = 2;
      order.silver = 2;
      order.blue = 2;
      order.gold = 2;
      order.black = 2;

      order.sampler = true;
      order.starterPack = false;
      order.displayCase = "";

      order.totalCards = "12";
      order.subTotal = "0";
      order.volumeDiscount = "0";
      order.shipping = 0;
      order.tax = "";
      order.donation = "";

      order.total = "";
    },
    starterOrder: (order, action) => {
      order.red = 250;
      order.green = 250;
      order.silver = 200;
      order.blue = 200;
      order.gold = 50;
      order.black = 50;

      order.sampler = false;
      order.starterPack = true;
      order.displayCase = "";

      order.totalCards = 1000;
      order.subTotal = 750;
      order.volumeDiscount = "0";
      order.shipping = 50;
      order.tax = 37.5;
      order.donation = "";

      order.total = 837.5;
    },
    totalCardsQuantity: (order, action) => {
      order.totalCards =
        Number(order.red) +
        Number(order.green) +
        Number(order.silver) +
        Number(order.blue) +
        Number(order.gold) +
        Number(order.black);
    },
    setSubTotal: (order, action) => {
      order.subTotal = action.payload;
    },
    setVolumeDiscount: (order, action) => {
      order.volumeDiscount = action.payload;
    },
    setTax: (order, action) => {
      order.tax = ( (Number(order.subTotal)+50-Number(order.volumeDiscount) )  * action.payload).toFixed(2);
    },
    setDonation: (order, action) => {
      order.donation = Number(action.payload.toFixed(2));
    },
    setTotal: (order, action) => {
      order.total =
        Number(order.subTotal) -
        Number(order.volumeDiscount) +
        Number(order.shipping) +
        Number(order.tax) +
        Number(order.donation);
      order.total = Number(order.total).toFixed(2);
    },
    addDisplayCase: (order, action) => {
      order.subTotal = Number(order.subTotal) + Number(order.displayCase);
    },
  },
});

export const {
  customOrder,
  samplerOrder,
  starterOrder,
  setInitialOrder,
  totalCardsQuantity,
  setSubTotal,
  setVolumeDiscount,
  setTax,
  setDonation,
  setTotal,
  addDisplayCase,
} = slice.actions;
export default slice.reducer;
