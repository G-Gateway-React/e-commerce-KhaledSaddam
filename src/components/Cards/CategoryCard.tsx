import { Box, Typography } from "@mui/material";
import { CardImg } from "./CardStyles";
interface IImage {
  imgPath: string;
  title: string;
}
const CategoryCard: React.FC<IImage> = ({ imgPath, title }): JSX.Element => {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography className="overlay" variant="h3">
        {title}
      </Typography>
      <CardImg src={imgPath} alt="default" />
    </Box>
  );
};

export default CategoryCard;
