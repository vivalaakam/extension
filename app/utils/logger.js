export default function logger() {
    return next => (reducer, initialState) => {
        const store = next(reducer, initialState);
        console.log('state after dispatch', reducer, store.getState());
        return store;
    };
}
