import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialState = [
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.warn(state);
      const { ISBN } = action.data;
      console.log('redux ka state:::::::', state)
      let existingItem = state.find(obj => obj?.ISBN === ISBN);
      // return dupe ? state : [...state, action.data]
      if (existingItem) {
        let addQty = state.map((item) => item.ISBN === ISBN ? { ...item, quantity: item.quantity + 1 } : item);
        console.log('first', addQty)
        return addQty
      } else {
        return [...state, { ...action.data, quantity: 1 }];
      }
    // return [
    //   ...state,
    //   action.data
    // ]
    case REMOVE_FROM_CART:
      const updatedState = state.map(item =>
        item.ISBN === action.data.ISBN
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null
          : item
      ).filter(Boolean);

      return updatedState;
    // case REMOVE_FROM_CART:

    //   if (existingItem) {
    //     if (existingItem.quantity > 1) {
    //       // If quantity > 1, decrement the quantity
    //       return state.map((item) =>
    //         item.ISBN === action.data.ISBN ? { ...item, quantity: item.quantity - 1 } : item
    //       );
    //     } else {
    //       // If quantity is 1 or less, remove the entire item from the cart
    //       return state.filter((item) => item.ISBN !== action.data.ISBN);
    //     }
    //   }

    //   return state;
    default:
      return state
  }
}


   // let result = state.filter(item => {
      //   return item.ISBN != action.data.ISBN;
      // })
      // return [...result]

      // case 'REMOVE_FROM_CART': {
      //   const index = state.findIndex(item => item === action.data);
      //   return state.filter((_, i) => i !== index);
      // }
      // case DELETE_PRODUCT: {
      //   return {
      //     ...state,
      //     products: state.filter(state => state.id !== action.payload)
      //   }
      // }
      // const existingItem = state.find((item) => item.ISBN === action.data.ISBN);
