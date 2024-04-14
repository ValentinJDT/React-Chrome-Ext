import { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "../component/router/Router";

const Home: FC<RouteComponentProps> = ({
  navigation: { location, navigate, goBack },
  container: { setSize },
}) => {
  useEffect(() => setSize("20em", "25em"), [location]);

  const [currentPath, setCurrentPath] = useState("")

  /** Get current path with chrome api. */
  const getCurrentTabUrl = () => {
    chrome.tabs.query({
      active: true,
      currentWindow: true,
    }, ([tab]) => {
      console.log(tab.url)
    });
  }

  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/settings")}>Go to settings</button>
      <button onClick={() => goBack()}>Go to previous page</button>

      <button onClick={() => getCurrentTabUrl()}>Show current path : {currentPath}</button>
    </>
  );
};

export default Home;
