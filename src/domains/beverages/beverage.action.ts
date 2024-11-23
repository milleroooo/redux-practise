import { Action } from "../../redux/action";
import {
  CREATE_BEVERAGE,
  DELETE_BEVERAGE,
  UPDATE_BEVERAGE,
} from "./beverage.const";

export const createBeverage: Action = {
  type: CREATE_BEVERAGE,
  payload: {
    name: "Milk",
    type: "Dairy",
    volumeInLiters: 1.2,
    isCarbonated: false,
  },
};

export const updateBeverage: Action = {
  type: UPDATE_BEVERAGE,
  payload: {
    id: "1",
    name: "Milk",
    type: "Dairy",
    volumeInLiters: 2.2,
    isCarbonated: true,
  },
};

export const deleteBeverage: Action = {
  type: DELETE_BEVERAGE,
  payload: { id: "1" },
};
