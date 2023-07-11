"use client";
import Listbox from "@/components/Listbox";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { ChangeEvent, useState } from "react";

type FormFields = {
  id: any;
  name: string;
  completed: boolean;
};

export default function Home() {
  const [lists, setLists] = useState<FormFields[]>([
    {
      id: 1234,
      name: "subarna",
      completed: false,
    },
    {
      id: 123422,
      completed: false,

      name: "ayush",
    },
    {
      id: 123433,
      completed: true,
      name: "uprety",
    },
  ]);

  const [value, setValue] = useState<FormFields>();
  const addTodo = (todo: FormFields) => {
    if (value?.id) {
      const todos = lists.findIndex((l) => l.id == value.id);
      if (todos !== -1) {
        setLists((list) => {
          return list.map((l, i) => {
            if (l.id == value.id) {
              return { ...l, name: todo.name };
            }
            return l;
          });
        });
      }
    } else {
      todo.id = Date.now();
      console.log(todo);

      setLists((list) => [...list, todo]);
    }
    resetFields();
  };
  const deleteTodo = (id: number) => {
    setLists((list) => list.filter((l, i) => l.id !== id));
  };
  const resetFields = () => {
    setValue({
      id: "",
      name: "",
      completed: false,
    });
  };
  const editTodo = (id: any) => {
    const todo = lists.find((l) => l.id == id);
    setValue({
      id,
      name: todo?.name ?? "",
      completed: todo?.completed ?? false,
    });
  };
  const statusTodo = (id: any) => {
    setLists((li) => {
      return li.map((l, e) => {
        if (l.id == id) {
          return { ...l, completed: !l.completed };
        }
        return l;
      });
    });
  };

  const formChange = (nextVal: unknown) => {
    console.log(nextVal);
    setValue(nextVal as any);
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <div className="mt-5 border border-red-200 p-3 rounded-xl max-w-xs">
        [/* Edit / Reset Firn */]
        <Form
          value={value}
          onChange={formChange}
          onReset={resetFields}
          onSubmit={({ value }) => {
            addTodo(value);
          }}
        >
          <FormField name="name" htmlFor="text-input-id" label="TODO">
            <TextInput
              id="text-input-id"
              name="name"
              style={{ border: "1px solid lightgray" }}
            />
            {/* <TextInput
              id="text-input2-id"
              name="name2"
              style={{ border: "1px solid lightgray" }}
            /> s*/}
          </FormField>
          <Box direction="row" gap="medium" width="large">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
        <Listbox
          lists={lists}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          statusTodo={statusTodo}
        />
      </div>
    </main>
  );
}
