import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import Box from "./Box";
import List from "./List";

import { useSelector, useDispatch } from "react-redux";
import { addItemBox, setNewLocationItem } from "./boxSlice";

const container = {
	display: "flex",
};

const styles = {
	width: 400,
	height: 300,
	border: "1px solid black",
	position: "relative",
};

const right = {
	width: 100,
	height: 300,
	border: "1px solid black",
	marginLeft: "10px",
};

const ulStyle = {
	listStyle: "none",
	paddingLeft: 0,
	margin: "5px",
};

const Container = () => {
	const isDraggingBox = useSelector((state) => state.isDragBox);
	const isDraggingList = useSelector((state) => state.isDragList);
	const dispatch = useDispatch();
	const boxes = useSelector((state) => state.boxItems);

	const [, dropBox] = useDrop({
		accept: ItemTypes.BOX,
		drop: (item, monitor) => {
			const delta = monitor.getDifferenceFromInitialOffset();
			const left = Math.round(item.left + delta.x);
			const top = Math.round(item.top + delta.y);
			moveBox(item.id, left, top);
			return undefined;
		},
	});

	const [, dropList] = useDrop({
		accept: ItemTypes.ITEM,
		drop: (item, monitor) => {
			onDropBox(item, monitor.getClientOffset().y, monitor.getClientOffset().x);
			return undefined;
		},
	});

	const onDropBox = (item, top, left) => {
		return new Promise((resolve) => {
			const idItem = item.id + Math.floor(Math.random() * 100 + 1);
			const newItem = {
				[idItem]: {
					title: item.name,
					top,
					left: left - 50,
					id: idItem,
				},
			};
			const action = addItemBox(newItem);
			dispatch(action);
		});
	};

	const moveBox = (id, left, top) => {
		return new Promise((resolve) => {
			const newItem = {
				top,
				left,
				id,
			};
			const action = setNewLocationItem(newItem);
			dispatch(action);
		});
	};

	return (
		<div style={container}>
			<div
				ref={
					isDraggingBox === true && isDraggingList === false
						? dropBox
						: dropList
				}
				style={styles}
			>
				{Object.keys(boxes).map((key) => {
					const { left, top, title, id } = boxes[key];
					return (
						<Box key={key} id={key} left={left} top={top}>
							{title} {" id: "} {id}
						</Box>
					);
				})}
			</div>
			<div style={right}>
				<ul style={ulStyle}>
					<li>
						<List name="Glass" id="glass" />
						<List name="Banana" id="banana" />
						<List name="Paper" id="paper" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Container;
