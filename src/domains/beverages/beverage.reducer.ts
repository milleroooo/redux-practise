import { Action } from "../../redux/action";
import {
  CREATE_BEVERAGE,
  DELETE_BEVERAGE,
  UPDATE_BEVERAGE,
} from "./beverage.const";
import { Beverage } from "./beverage.model";

export const beveragesReducer = (state: any, action: Action): Beverage[] => {
  switch (action.type) {
    case CREATE_BEVERAGE: {
      return [...state, action.payload];
    }

    case UPDATE_BEVERAGE: {
      return state.map((beverage: { id: string }) =>
        beverage.id === (action.payload as Beverage).id
          ? { ...beverage, ...action.payload }
          : beverage
      );
    }

    case DELETE_BEVERAGE: {
      return state.filter(
        (beverage) => beverage.id !== (action.payload as Beverage).id
      );
    }

    default:
      return state;
  }
};
