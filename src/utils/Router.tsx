import React, { useState } from "react";

interface Route {
  path: string;
  component: React.ReactNode;
}

interface RouterProps {
  routes: Route[];
}

export const Router: React.FC<RouterProps> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  React.useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const CurrentComponent = routes.find(
    (route) => route.path === currentPath
  )?.component;

  return (
    <div>
      {CurrentComponent || <h1>Page not found</h1>}
      <nav>
        <button onClick={() => navigate("/")}>Connexion</button>
        <button onClick={() => navigate("/register")}>Inscription</button>
        <button onClick={() => navigate("/lists")}>Dashboard</button>
      </nav>
    </div>
  );
};
