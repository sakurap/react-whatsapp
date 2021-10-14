import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Login from "./components/Login";
import useAuthUser from "./hooks/useAuthUser";

export default function App() {
  const page = useWindowSize();
  // const [user] = useAuthState(auth);
  const user = useAuthUser();

  // if (!user) {
  //   return <Login />;
  // }

  // console.log({user});

  return (
    <div className="app" style={{ ...page }}>
      App
    </div>
  );
}
