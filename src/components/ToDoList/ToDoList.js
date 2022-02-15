import React from "react";
import ListItem from "./ListItem";

const ToDoList = ({todos}) => {
    const elements = todos.map((item) => {

        const {id,...restProps} = item;

        return (
            <li id={item.id}>
                <ListItem {...restProps}/>
            </li>
        )
    });
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default ToDoList