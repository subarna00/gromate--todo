import {
  Box,
  Button,
  Form,
  Grid,
  Image,
  ResponsiveContext,
  Text,
  TextInput,
} from "grommet";

interface Props {}

const page = () => {
  return (
    <Box height={{ min: "100vh", max: "100vh" }} overflow="hidden">
      <Grid fill columns={["1/2", "flex"]} height="full" responsive>
        <Box height="100vh">
          <Image src="/images/g3.png" alt="as" height="100%" />
        </Box>
        <Box margin={{ vertical: "auto", left: "76px" }}>
          <Box width={{ max: "602px" }}>
            <Box justify="center" align="center">
              <Text size="60px" weight="light">
                LOGIN
              </Text>
              <hr
                style={{
                  border: "1px dotted #D9D9D9",
                  width: "50%",
                  margin: "20px 0px 60px 0px",
                }}
              />
              <Form
              //   value={null}
              //   onChange={() => {}}
              //   onReset={() => {}}
              //   onSubmit={() => {}}
              >
                <Box
                  margin={{ bottom: "24px" }}
                  round="0px"
                  background="#EEEEEE"
                  pad={{ vertical: "10px" }}
                >
                  <TextInput
                    placeholder="Email"
                    name="email"
                    color="black"
                    size="20px"
                    width={{ max: "602px", width: "502px" }}
                    plain
                  />
                </Box>
                <Box
                  margin={{ bottom: "15px" }}
                  round="0px"
                  background="#EEEEEE"
                  pad={{ vertical: "10px" }}
                >
                  <TextInput
                    placeholder="password"
                    name="password"
                    color="black"
                    size="20px"
                    width={{ max: "602px", width: "602px" }}
                    plain
                  />
                </Box>
                <Box align="end" margin={{ bottom: "25px" }}>
                  <Text color="#1713B9">Forget your password?</Text>
                </Box>

                <hr style={{ width: "70%", border: "0.2px dotted black" }} />

                <Box direction="row" gap="medium">
                  <Button
                    type="submit"
                    label="Submit"
                    primary
                    fill
                    color="#DE955A"
                    pad={{ vertical: "16px" }}
                    margin={{ bottom: "32px", top: "35px" }}
                  />
                </Box>
              </Form>
              <Text color="#1713B9" weight="light">
                Create an Account
              </Text>
              <Text
                margin={{ vertical: "37px" }}
                weight="light"
                color="#1713B9"
              >
                Or
              </Text>
              <Box direction="row" gap="100px">
                <Image src="/images/g.png" alt="google" height="50px" />
                <Image src="/images/f.png" alt="facebook" height="50px" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default page;
