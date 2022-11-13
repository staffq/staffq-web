import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Card } from "./style";
const Index = (props) => {
  const {
    CardHead,
    children,
    CardFooter,
    width,
    height,
    backgroundColor,
    padding,
    margin,
    borderRadius,
  } = props;
  return (
    <div>
      <Card
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        padding={padding}
        margin={margin}
        borderRadius={borderRadius}
      >
        {CardHead ? <Header>{CardHead}</Header> : null}
        <Body>{children}</Body>
        {CardFooter ? <Footer>{CardFooter}</Footer> : null}
      </Card>
    </div>
  );
};

export default Index;
