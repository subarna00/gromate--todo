"use client";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { ChangeEvent, useState } from "react";

type FormFields = {
  name: string;
};

export default function Home() {
  const [value, setValue] = useState<FormFields>({
    name: "",
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Todo</h1>
      <div className="mt-5 border border-red-200 p-3 rounded-xl">
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() =>
            setValue({
              name: "",
            })
          }
          onSubmit={({ value }) => {}}
        >
          <FormField name="name" htmlFor="text-input-id" label="Name">
            <TextInput
              id="text-input-id"
              name="name"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                console.log(e.target.value)
              }
            />
          </FormField>
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
      </div>
    </main>
  );
}
