import { observable, action } from 'mobx';
import { createContext } from 'react';

class CounterStore {
    @observable
    public value = 0;

    @action
    public increment = () => this.value++;

    @action
    public decrement = () => this.value--;
}

export const CounterStoreContext = createContext(new CounterStore());