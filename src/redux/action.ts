export interface Action {
    type: string;
    payload: object;
}

const createAction: Action = {
    type:'CREATE',
    payload: {name: 'Adrian'}
}

const updateAction: Action = {
    type:'UPDATE',
    payload: {id: '1', name: 'Adrian'}
}

const deleteAction: Action = {
    type:'DELETE',
    payload: {id: '1'}
}
