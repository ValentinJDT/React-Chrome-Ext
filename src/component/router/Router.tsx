import { Dispatch, FC, ReactElement, useEffect, useState } from "react";

interface RouteComponentProps {
  navigate: Dispatch<React.SetStateAction<string>>;
  location: string;
  container: {
    setSize: (x: number | string, y: number | string) => void;
    setX: Dispatch<React.SetStateAction<number | string>>;
    setY: Dispatch<React.SetStateAction<number | string>>;
    x: number | string;
    y: number | string;
  };
  [key: string]: any;
}

interface RouteProps {
  element: FC<RouteComponentProps>;
  path: string;
}

interface RouterProps {
  children?: ReactElement<RouteProps> | ReactElement<RouteProps>[] | undefined;
}

const Router: FC<RouterProps> = ({ children = [] }) => {
  const [innerPath, setInnerPath] = useState("/");

  const [x, setX] = useState<number | string>("10em");
  const [y, setY] = useState<number | string>("10em");

  const setSize = (x: number | string, y: number | string) => {
    setX(x);
    setY(y);
  };

  const routes = [children].flat();

  return (
    <div
      style={{
        width: x,
        height: y,
      }}
    >
      {routes
        .find((e) => e.props.path == innerPath)
        ?.props.element({
          location: innerPath,
          navigate: setInnerPath,
          container: {
            setSize: setSize,
            setX: setX,
            setY: setY,
            x: x,
            y: y,
          },
        }) || <div>Error 404</div>}
    </div>
  );
};

const Route: FC<RouteProps> = () => <></>

export default Router;

export {
    Route
}

export type {
  RouteComponentProps
}