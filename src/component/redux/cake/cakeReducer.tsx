import { BUY_CAKE } from "./cakeTypes";

type cakeType = {
  numberOfCakes: number;
};

const initialState: cakeType = {
  numberOfCakes: 10,
};

type actionType = {
  type: "BUY_CAKE";
};
const cakeReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
