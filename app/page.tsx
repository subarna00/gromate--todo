"use client";
import Listbox from "@/components/Listbox";
import {
  Box,
  Button,
  Form,
  FormField,
  Header,
  TextInput,
  Menu,
  Page,
  PageContent,
  Paragraph,
} from "grommet";
// import { Menu } from "grommet-icons";

// Removed unused import ChangeEvent
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

  // Naming should be meaningful
  const addTodo = (todo: FormFields) => {
    // Update when value
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
      // todo.id = Date.now();
      console.log(todo);

      setLists((list) => [...list, { ...todo, id: Date.now() }]);
    }
    resetFields();
  };

  // Update naming of callback parameters from  l to something meaningful like: listItem OR singleListItem OR anything which can be meaningful.
  // Remove `i` index which is unused
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

   // Update naming of callback parameters from  l to something meaningful like: listItem OR singleListItem OR anything which can be meaningful.
  const editTodo = (id: any) => {
    const todo = lists.find((l) => l.id == id);
    setValue({
      id,
      name: todo?.name ?? "",
      completed: todo?.completed ?? false,
    });
  };


  // Update to something meaningful
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
    <Box>
      <Header background="brand">
        {/* <Button icon={<Icons.Home />} hoverIndicator /> */}
        <Menu label="account" items={[{ label: "logout" }]} kind="wide" />
      </Header>
      <Page kind="wide">
        <PageContent
          height="95vh"
          align="center"
          justify="center"
          background="light-3"
          pad={{ horizontal: "50px", vertical: "50px" }}
        >
          <Box width="500px" background="white" pad="40px" round="small">
            <Form
              value={value}
              onChange={formChange}
              onReset={resetFields}
              onSubmit={({ value }) => {
                addTodo(value);
              }}
            >
              <FormField name="name" htmlFor="text-input-id" label="TODO">
                <TextInput id="text-input-id" name="name" />
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
          </Box>
        </PageContent>
      </Page>
    </Box>
  );
}
