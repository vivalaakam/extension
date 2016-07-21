export default function () {
    return next => (reducer, initialState) => {
        const store = next(reducer, initialState);
        store.subscribe(() => {
            const state = store.getState();
            console.log('state after dispatch', state);
            chrome.storage.local.set({state: JSON.stringify(state)});
        });
        return store;
    };
}
