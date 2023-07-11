import React, { FC } from "react";
import Listcard from "./Listcard";
import { ListProps } from "@/types/todo";

const Listbox: FC<ListProps> = ({
  lists,
  deleteTodo,
  editTodo,
  statusTodo,
}) => {
  return (
    <div className="list" style={{ marginTop: "50px" }}>
      {lists.map((list, index) => {
        return (
          <div key={list.id}>
            <Listcard
              list={list}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              statusTodo={statusTodo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Listbox;
