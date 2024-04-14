import { FC, useEffect } from "react";
import { RouteComponentProps } from "../component/router/Router";

const Settings: FC<RouteComponentProps> = ({
  navigation: { navigate, goBack },
  container: { setSize },
}) => {
  useEffect(() => setSize("10em", "10em"), [location]);

  return (
    <>
      <div>My settings</div>
      <button onClick={() => navigate("/")}>Go to home</button>
      <button onClick={() => goBack()}>Go to previous page</button>
    </>
  );
};

export default Settings;
