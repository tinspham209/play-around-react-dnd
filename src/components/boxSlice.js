import { createSlice } from "@reduxjs/toolkit";
import update from "immutability-helper";

const box = createSlice({
	name: "state",
	initialState: {
		isDragBox: false,
		isDragList: false,
		boxItems: {},
	},
	reducers: {
		setBoxDragging: (state, action) => {
			state.isDragBox = action.payload;
		},
		setListDragging: (state, action) => {
			state.isDragList = action.payload;
		},
		addItemBox: (state, action) => {
			const updateBoxItems = update(state.boxItems, {
				$merge: action.payload,
			});
			state.boxItems = updateBoxItems;
		},
		setNewLocationItem: (state, action) => {
			const item = action.payload;
			const top = item.top;
			const left = item.left;
			const updateLocationItem = update(state.boxItems, {
				[item.id]: {
					$merge: {
						top,
						left,
					},
				},
			});
			state.boxItems = updateLocationItem;
		},
	},
});

const { reducer, actions } = box;
export const {
	setBoxDragging,
	setListDragging,
	addItemBox,
	setNewLocationItem,
} = actions;

export default reducer;
