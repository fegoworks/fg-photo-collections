import "./LoadingSkeleton.css";

import { FunctionComponent } from "react";
import { Card } from "../index";

const LoadingSkeleton: FunctionComponent = () => {
  return <Card className="skeleton"></Card>;
};

export default LoadingSkeleton;
