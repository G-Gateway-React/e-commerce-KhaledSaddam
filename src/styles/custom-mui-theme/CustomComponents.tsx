import { createTheme, styled } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";
import { Button, Checkbox, Link } from "@mui/material";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));
export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.status.danger,
  textDecorationColor: red[900],
  "&:visited": {
    textDecorationColor: red[900],
  },
}));
export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  border: "2px solid #fff",
  color: "#fff",
  "&:hover": {
    border: "2px solid #D1094B",
    backgroundColor: "black",
    color: "#D1094B",
  },
  "&:active": {
    border: "2px solid #fff",
    backgroundColor: "black",
    color: "#fff",
  },
}));

export const theme = createTheme({
  status: {
    danger: red[900],
  },
});
