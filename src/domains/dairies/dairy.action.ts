import {Action} from "../../redux/action";

export const createDairy: Action = {
    type:'CREATE',
    payload: {name: 'Milk', type: 'Full', fatContent: 3.2}
}

const updateDairy: Action = {
    type:'UPDATE',
    payload: {id: '1', name: 'Milk', type: 'Medium', fatContent: 1.2}
}

const deleteDairy: Action = {
    type:'DELETE',
    payload: {id: '1'}
}