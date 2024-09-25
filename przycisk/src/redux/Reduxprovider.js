
export const ReduxProvider = () => {

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1,
      reset: () => 0,
    },
  });

  const { increment, decrement, reset } = counterSlice.actions;

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });

  store.subscribe(() => {
    console.log("Stan licznika:", store.getState().counter);
  });

  const counterDisplay = () => {
    const count = useSelector((state) => state.count);
  }

  const handleClickAdd = () => {
    store.dispatch(increment());
  };

  const handleClickSubstract = () => {
    store.dispatch(decrement());
  };
  const handleClickReset = () => {
    store.dispatch(reset());
  };
}

export default ReduxProvider;