import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item
  }
}
export function removeFromCart(item) {
  const obj = {
    type: REMOVE_FROM_CART,
    data: item
  }
  return obj
}