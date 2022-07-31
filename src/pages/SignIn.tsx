import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { userContext } from "../context/UserContext";
import {
  CustomButton,
  CustomCheckbox,
  CustomLink,
} from "../styles/custom-mui-theme/CustomComponents";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import CheckboxIcon from "../components/CheckboxIcon";
interface IFormInput {
  email: string;
  password: string;
}
export interface IUserInfo {
  email: string;
  password: string;
}
const SignIn = () => {
  const [users, setUsers] = React.useState<IUserInfo[]>([]);
  const formSchema = Yup.object().shape({
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
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const { errors } = formState;

  const { handleLogin } = React.useContext(userContext);
  return (
    <Grid container component="main">
      <Box
        sx={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          border: "1px solid #000",
          padding: "1.5rem",
          borderRadius: "6px",
          textAlign: "start",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, color: "#D1094B" }}
        >
          <TextField
            inputProps={{
              style: { backgroundColor: "white" },
            }}
            margin="normal"
            fullWidth
            id="email"
            required
            placeholder="Email"
            variant="filled"
            autoFocus
            {...register("email")}
            autoComplete="email"
          />
          <Typography> {errors.email?.message} </Typography>
          <TextField
            inputProps={{
              style: { backgroundColor: "white" },
            }}
            margin="normal"
            fullWidth
            required
            type="password"
            id="password"
            placeholder="password"
            variant="filled"
            {...register("password")}
          />
          <Typography> {errors.password?.message} </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <FormControlLabel
              sx={{ marginLeft: "0px", color: "#000" }}
              control={<CustomCheckbox />}
              label="Remember me"
            />
          </Box>
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: "5rem", mb: 2 }}
          >
            Sign In
          </CustomButton>
          <Grid container>
            <Grid item>
              <CustomLink href="#" variant="body2">
                {"I DON’T HAVE AN ACCOUNT ! CREATE ACCOUNT"}
              </CustomLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignIn;
