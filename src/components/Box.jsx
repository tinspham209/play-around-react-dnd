import React, { useMemo } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { setBoxDragging } from "./boxSlice";
const style = {
	position: "absolute",
	border: "1px solid gray",
	backgroundColor: "white",
	padding: "0.5rem 1rem",
	cursor: "move",
};

const Box = ({ id, left, top, children }) => {
	const dispatch = useDispatch();

	const [{ isDragging }, drag] = useDrag({
		item: { id, left, top, type: ItemTypes.BOX },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		isDragging: () => {
			const action = setBoxDragging(true);
			dispatch(action);
			// setBoxDrag(true);
		},
		end: () => {
			const action = setBoxDragging(false);
			dispatch(action);
			// setBoxDrag(false);
		},
	});

	const boxStyle = useMemo(
		() => ({
			...style,
			opacity: isDragging ? 0.4 : 1,
			left,
			top,
		}),
		[isDragging, left, top]
	);

	return (
		<div ref={drag} style={boxStyle}>
			{children}
		</div>
	);
};

export default Box;
