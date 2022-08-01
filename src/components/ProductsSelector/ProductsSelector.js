import React from "react";
import { ImagesPath } from "../../images/ImagesPath";
import { Image } from "../../styles/imageStyles/ImageStyles";
import { FlexRow } from "../GlobalStyles";

const ProductsSelector = () => {
  return (
    <FlexRow style={{ margin: "1rem 0 1rem 0", justifyContent: "flex-start" }}>
      <Image imgWidth="85px" src={ImagesPath.Rectangle34}></Image>
      <Image imgWidth="85px" src={ImagesPath.Rectangle35}></Image>
      <Image imgWidth="85px" src={ImagesPath.Rectangle36}></Image>
      <Image imgWidth="85px" src={ImagesPath.Rectangle37}></Image>
      <Image imgWidth="85px" src={ImagesPath.Rectangle38}></Image>
    </FlexRow>
  );
};

export default ProductsSelector;
