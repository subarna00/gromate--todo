import React, { FC } from "react";

type Lists = {
  id: any;
  name: string;
  completed: boolean;
};
type ListProps = {
  list: Lists;
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
  statusTodo: (id: number) => void;
};
const Listcard: FC<ListProps> = ({
  list,
  deleteTodo,
  editTodo,
  statusTodo,
}) => {
  return (
    <div>
      <div
        className="listContainer"
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div
          className="left"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: `${list.completed ? "line-through" : ""} `,
          }}
          onClick={() => {
            statusTodo(list.id);
          }}
        >
          {list.name}
        </div>
        <div className="right">
          <button onClick={() => editTodo(list.id)}>Edit</button>
          <button onClick={() => deleteTodo(list.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Listcard;
