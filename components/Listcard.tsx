// Remov unused Import 'Grid'
import { Box, Button, Grid, Text } from "grommet";
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
    // <Box>
    <Box
      pad="10px"
      gap="small"
      className="listContainer"
      direction="row-responsive"
      justify="between"
    >
      {/* list box */}
      <Box
        className="left"
        style={{
          textDecoration: `${list.completed ? "line-through" : ""} `,
        }}
        onClick={() => {
          statusTodo(list.id);
        }}
      >
        <Text size="16px" weight="bold">
          {list.name}
        </Text>
      </Box>
      <Box direction="row" gap="10px" className="right">
        <Button
          onClick={() => editTodo(list.id)}
          label="Edit"
          primary
          size="small"
        />
        <Button
          onClick={() => deleteTodo(list.id)}
          label="Delete"
          size="small"
          secondary
        />
      </Box>
    </Box>
    // </Box>
  );
};

export default Listcard;
