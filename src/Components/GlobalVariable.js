import React from "react";
import { createContext } from "react";

export const getSessionStorage = (variableName) => {
  if (sessionStorage.length !== 0) {
    return window.sessionStorage.getItem(variableName);
  }
};

export const setSessionStorage = (variableName, item) => {
  window.sessionStorage.setItem(variableName, item);
};

export const productType = createContext({});

export default { singleProduct: 0, categoryType: 0 };
