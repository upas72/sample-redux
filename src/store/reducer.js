const initialState = {
    counters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counters: state.counters.map(c =>
                    c.id === action.key ? { ...c, value: c.value + 1 } : c
                )
            };
        case "DECREMENT":
            return {
                ...state,
                counters: state.counters.map(c =>
                    c.id === action.key && c.value > 0
                        ? { ...c, value: c.value - 1 }
                        : c
                )
            };
        case "DELETE":
            return {
                ...state,
                counters: state.counters.filter(c => c.id !== action.key)
            };
        case "RESET":
            return {
                ...state,
                counters: state.counters.map(c => ({ id: c.id, value: 0 }))
            };
        case "ADD":
            return {
                ...state,
                counters: [
                    ...state.counters,
                    {
                        id: state.counters[state.counters.length - 1]
                            ? state.counters[state.counters.length - 1].id + 1
                            : 0,
                        value: 0
                    }
                ]
            };
        default:
            return state;
    }
};

export default reducer;
