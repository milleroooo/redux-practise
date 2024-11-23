import {Action} from "./action";

export class Store {
    private subscribers: Function[];
    private state: Record<string, any>;
    private readonly reducers: Record<string, Function>;

    constructor(reducers = {}, initialState = {}) {
        this.subscribers = []
        this.reducers = reducers
        this.state = this.reduce(initialState, {} as Action)
    }

    get value() {
        return this.state;
    }

    subscribe(fn: Function): () => void {
        this.subscribers = [...this.subscribers, fn]
        return () => {
            this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn)
        }
    }

    dispatch(action: Action): void {
        this.state = this.reduce(this.state, action)
        this.subscribers
            .forEach(fn => fn(this.value))
    }

    private reduce(state: Record<string, any>, action: Action) {
        if(Object.keys(action).length > 0) {
            const newState = {}
            for (const prop in this.reducers) {
                newState[prop] = this.reducers[prop](state[prop], action)
            }
            return newState
        } else {
            return state;
        }
    }
}

