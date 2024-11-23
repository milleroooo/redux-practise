/**REDUX**/
import { Store } from "./redux/store";

/**DAIRIES**/
import { dairiesReducer } from "./domains/dairies/dairy.reducers";
import { dairiesInitialState } from "./domains/dairies/dairy.state";
import { createDairy } from "./domains/dairies/dairy.action";
import { printCurrentDairiesState } from "./domains/dairies/dairy.subscribers";

/**BEVERAGES**/
import { beveragesReducer } from "./domains/beverages/beverage.reducer";
import { beveragesInitialState } from "./domains/beverages/beverage.state";
import { showCurrentState } from "./domains/beverages/beverage.subscribers";
import {
  createBeverage,
  deleteBeverage,
  updateBeverage,
} from "./domains/beverages/beverage.action";

export function initializeRedux(): void {
    const store = new Store(
        {...dairiesReducer},
        {...dairiesInitialState}
    );
    // add subscriber function
    const printCurrentDairies = store.subscribe(printCurrentDairiesState);
    store.dispatch(createDairy);
    store.dispatch(createDairy);

    // remove subscriber function
    printCurrentDairies();
    store.dispatch(createDairy);
}

export function initializeBeveragesState(): void {
  const store = new Store(
    { ...beveragesReducer },
    { ...beveragesInitialState }
  );
  const showBeverages = store.subscribe(showCurrentState);

  store.dispatch(createBeverage);
  store.dispatch(updateBeverage);
  store.dispatch(deleteBeverage);

  showBeverages();

  store.dispatch(createBeverage);
  store.dispatch(updateBeverage);
  store.dispatch(deleteBeverage);
}
