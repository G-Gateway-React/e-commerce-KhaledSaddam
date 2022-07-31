import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import apiRequest from "../components/apiRequest";
import { API_URL } from "../components/apiRequest";
import { FormControlLabel } from "@mui/material";
import {
  CustomButton,
  CustomCheckbox,
  CustomLink,
} from "../styles/custom-mui-theme/CustomComponents";
const theme = createTheme();
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface IUserInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState<IUserInfo[]>([]);

  const formSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .max(40, "At most Forty letters")
      .min(2, "At least tow letters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .max(40, "At most Forty letters")
      .min(2, "At least tow letters"),

    email: Yup.string()
      .email("Must be a valid email")
      .max(100)
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters"),
  });
  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } =
    useForm<IFormInput>(validationOpt);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // useDispatch
    handleAddItem(data);
    return console.log(data);
  };
  const { errors } = formState;

  const handleAddItem = async (data: any) => {
    console.log("Sec: ", data);
    const newId = Math.floor(Math.random() * 10000);
    const myNewUser = {
      id: newId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    const usrew = [...users, myNewUser];
    setUsers(usrew);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewUser),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) console.log(result);
  };
  // console.log("cccccccccccccc: ", formState.isValid);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #000",
            padding: "1.5rem",
            borderRadius: "6px",
            textAlign: "start",
          }}
        >
          <Typography component="h1" variant="h5">
            CREATE ACCOUNT
          </Typography>
          {formState.isValid && (
            <Box sx={{ color: "#1976d2", textAlign: "left" }}>
              <Typography component="h3" variant="h5">
                All Fields have been passed
              </Typography>
            </Box>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 2 }}
          >
            <Grid
              sx={{ color: "#D1094B" }}
              alignItems="flex-start"
              container
              spacing={2}
            >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputProps={{
                    style: { backgroundColor: "white" },
                  }}
                  id="firstName"
                  placeholder="First Name"
                  variant="filled"
                  autoFocus
                  {...register("firstName")}
                />
                <Typography> {errors.firstName?.message} </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputProps={{
                    style: { backgroundColor: "white" },
                  }}
                  id="lastName"
                  placeholder="Last Name"
                  variant="filled"
                  {...register("lastName")}
                />
                <Typography> {errors.lastName?.message} </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputProps={{
                    style: { backgroundColor: "white" },
                  }}
                  id="email"
                  placeholder="Email"
                  variant="filled"
                  {...register("email")}
                  autoComplete="email"
                />
                <Typography> {errors.email?.message} </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputProps={{
                    style: { backgroundColor: "white" },
                  }}
                  placeholder="Password"
                  variant="filled"
                  type="password"
                  id="password"
                  {...register("password")}
                />
                <Typography> {errors.password?.message} </Typography>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <FormControlLabel
                  sx={{
                    marginLeft: "0px",
                    marginTop: "1rem",
                    color: "black !important",
                  }}
                  control={
                    <CustomCheckbox
                      sx={{ marginTop: "-1.3rem" }}
                      value="remember"
                      color="primary"
                    />
                  }
                  label="Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties."
                />
              </Box>
            </Grid>
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTER NOW
            </CustomButton>
          </Box>
          <Grid item>
            <CustomLink href="#" variant="body2">
              {"I HAVE AN ACCOUNTs"}
            </CustomLink>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
