import { Dispatch, FC, ReactElement, useEffect, useState } from "react";
import Error404 from "./Error404";

interface RouteComponentProps {
  navigation: {
    navigate: Dispatch<React.SetStateAction<string>>;
    location: string;
    history: string[];
    goBack: () => void;
  },
  container: {
    setClassName: Dispatch<React.SetStateAction<string | undefined>>;
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
  notFoundComponent?: ReactElement<RouteProps> | undefined;
}

const Router: FC<RouterProps> = ({ children = [], notFoundComponent }) => {
  const [innerPath, setInnerPath] = useState("/");

  const [className, setClassName] = useState<string | undefined>(undefined);

  const [history, setHistory] = useState<string[]>([]);

  const [x, setX] = useState<number | string>("10em");
  const [y, setY] = useState<number | string>("10em");

  useEffect(() => {
    const last = history.slice(-1);
    if(last.length == 0 || last.length == 1 && last[0] != innerPath) {
      setHistory([...history, innerPath])
    }
  }, [innerPath]);

  const setSize = (x: number | string, y: number | string) => {
    setX(x);
    setY(y);
  };

  const goBack = () => {
    if(history.length == 0) return;
    const newArr = [...history]
    const popped = newArr.pop()
    setHistory(newArr)

    
    const last = newArr.slice(-1)
    if(popped && last.length >= 1) {
      setInnerPath(last[0])
    }
  }

  useEffect(() => {
    console.log(history)
  }, [history])

  const routes = [children].flat();

  const props: RouteComponentProps = {
    navigation: {
      location: innerPath,
      navigate: setInnerPath,
      goBack: goBack,
      history: history,
    },
    container: {
      setClassName: setClassName,
      setSize: setSize,
      setX: setX,
      setY: setY,
      x: x,
      y: y,
    },
  };

  return (
    <div
      className={className}
      style={{
        width: x || "10em",
        height: y || "10em",
      }}
    >
      {routes.find((e) => e.props.path == innerPath)?.props.element(props) ??
        Error404(props)}
    </div>
  );
};

const Route: FC<RouteProps> = ({}) => <></>;

export default Router;

export { Route };

export type { RouteComponentProps };
