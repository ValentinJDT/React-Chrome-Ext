import { Dispatch, useEffect, useState } from "react";
import "./App.css";

interface Size {
  x: number | string;
  y: number | string;
}

interface RouteProps {
  navigate: Dispatch<React.SetStateAction<string>>;
  location: string;
  extWindow: {
    setSize: (x: number | string, y: number | string) => void;
    setX: Dispatch<React.SetStateAction<number | string>>;
    setY: Dispatch<React.SetStateAction<number | string>>;
    size: Size;
  };
}

/** Define your routes and component here. */
const router: {
  [path: string]: (props: RouteProps) => JSX.Element;
} = {
  "/": Home,
  "/settings": Settings,
};

function App() {
  // Props for routes
  const [innerPath, setInnerPath] = useState("/");

  const [x, setX] = useState<number | string>("10em");
  const [y, setY] = useState<number | string>("10em");

  const setSize = (x: number | string, y: number | string) => {
    setX(x);
    setY(y);
  }

  return (
    <div style={{
      width: x,
      height: y,
    }}>
      {router[innerPath] ? (
        router[innerPath]({
          location: innerPath,
          navigate: setInnerPath,
          extWindow: {
            setSize: setSize,
            setX: setX,
            setY: setY,
            size: {
              x: x,
              y: y,
            },
          },
        })
      ) : (
        <h1>404</h1>
      )}
    </div>
  );
}

/** Page home */
function Home({ location, navigate, extWindow }: RouteProps) {
  // Define the size of the window
  useEffect(() => extWindow.setSize("10em", "20em"), [location]);

  return (
    <>
      <h1>Test ma page</h1>
      <button onClick={() => navigate("/settings")}>Go to settings</button>
      <button onClick={() => console.log("Log in the chrome extension")}>
        Send log
      </button>
    </>
  );
}

/** Page setting */
function Settings({ location, navigate, extWindow }: RouteProps) {
  
  // Define the size of the window
  useEffect(() => extWindow.setSize("10em", "10em"), [location]);

  return (
    <>
      <h1>Settings</h1>
      <button onClick={() => navigate("/")}>Go to home</button>
    </>
  );
}

export default App;
