export type Lists = {
    id: any;
    name: string;
    completed: boolean;
  };
 export type ListProps = {
    lists: Lists[];
    deleteTodo: (id: number) => void;
    editTodo: (id: number) => void;
    statusTodo: (id: number) => void;
  };