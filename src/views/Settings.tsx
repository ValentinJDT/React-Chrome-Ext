import { FC, useEffect } from "react";
import { RouteComponentProps } from "../component/router/Router";

const Settings: FC<RouteComponentProps> = ({ navigate, container }) => {
  useEffect(() => container.setSize("10em", "10em"), [location]);

  return (
    <>
      <div>My settings</div>
      <button onClick={() => navigate("/")}>Go back to home</button>
    </>
  );
};

export default Settings;
