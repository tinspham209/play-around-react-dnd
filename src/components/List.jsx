import React, { useMemo } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { setListDragging } from "./boxSlice";

const style = {
	border: "1px dashed gray",
	backgroundColor: "white",
	padding: "0.5rem 0",
	marginBottom: "1.5rem",
	cursor: "move",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItem: "center",
};
const List = ({ name, id }) => {
	const dispatch = useDispatch();

	const [{ isDragging }, drag] = useDrag({
		item: { id, name, type: ItemTypes.ITEM },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		isDragging: () => {
			const action = setListDragging(true);
			dispatch(action);
		},
		end: () => {
			const action = setListDragging(false);
			dispatch(action);
			// setListDrag(false);
		},
	});

	const listStyles = useMemo(
		() => ({
			...style,
			opacity: isDragging ? 0.4 : 1,
		}),
		[isDragging]
	);

	return (
		<div ref={drag} style={listStyles}>
			{name}, {"id: "}
			{id}
		</div>
	);
};

export default List;
