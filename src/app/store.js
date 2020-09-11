import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../components/boxSlice";

const store = configureStore({
	reducer: rootReducer,
});

export default store;
