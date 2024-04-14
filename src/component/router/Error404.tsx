import { FC, useEffect } from "react";
import { RouteComponentProps } from "./Router";

const Error404: FC<RouteComponentProps> = ({
  location,
  container: { setSize, setClassName },
}) => {
  useEffect(() => {
    setSize("10em", "10em");
    setClassName("error-404");
  }, [location]);

  return <div>Error 404 : View not found</div>;
};

export default Error404;
