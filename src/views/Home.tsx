import { FC, useEffect } from "react";
import { RouteComponentProps } from "../component/router/Router";

const Home: FC<RouteComponentProps> = ({ location, navigate, container }) => {
  useEffect(() => container.setSize("20em", "25em"), [location]);

  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/settings")}>Go to settings</button>
    </>
  );
};

export default Home;
