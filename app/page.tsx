"use client";
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
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
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
          </FormField>
          <Box direction="row" gap="medium" width="large">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
        <div className="list" style={{ marginTop: "50px" }}>
          {lists.map((list, index) => {
            return (
              <>
                <div
                  key={list.id}
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
                      textDecoration: `${
                        list.completed ? "line-through" : ""
                      } `,
                    }}
                    onClick={() => {
                      setLists((li) => {
                        return li.map((l, e) => {
                          if (l.id == list.id) {
                            return { ...l, completed: !l.completed };
                          }
                          return l;
                        });
                      });
                    }}
                  >
                    {list.name}
                  </div>
                  <div className="right">
                    <button onClick={() => editTodo(list.id)}>Edit</button>
                    <button onClick={() => deleteTodo(list.id)}>Delete</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}
