import {Action} from "../../redux/action";

export const dairiesReducer = {
    dairies:(state: any, action: Action) => {
       switch(action.type){
           case 'CREATE': {
               return [...state, action.payload]
           }
           case 'UPDATE': {
               console.log('update called');
               break;
           }
           case 'DELETE': {
               console.log('delete called');
           }
       }
    }
}