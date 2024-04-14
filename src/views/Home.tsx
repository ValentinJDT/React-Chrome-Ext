import { FC, useEffect } from "react";
import { RouteComponentProps } from "../component/router/Router";

const Home: FC<RouteComponentProps> = ({
  navigation: { location, navigate, goBack },
  container: { setSize },
}) => {
  useEffect(() => setSize("20em", "25em"), [location]);

  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/settings")}>Go to settings</button>
      <button onClick={() => goBack()}>Go to previous page</button>
    </>
  );
};

export default Home;
