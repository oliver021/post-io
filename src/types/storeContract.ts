export interface IDispatcher<T>{
    // simple method
    dispatch(newState: T): void;
}

export interface IAutoUpdate<TBinding>{
    bind(bindingFunc: (arg: TBinding) => void): void;
    update(): void;
}