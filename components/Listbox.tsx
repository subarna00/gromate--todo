import React, { FC } from "react";
import Listcard from "./Listcard";
import { ListProps } from "@/types/todo";
import { Box } from "grommet";

const Listbox: FC<ListProps> = ({
  lists,
  deleteTodo,
  editTodo,
  statusTodo,
}) => {
  return (
    <Box className="list" margin={{ top: "30px" }}>
      {lists.map((list, index) => {
        return (
          <Box key={list.id}>
            <Listcard
              list={list}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              statusTodo={statusTodo}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Listbox;
