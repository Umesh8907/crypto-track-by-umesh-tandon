import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";


const useStyles = makeStyles(() => ({
  App: {
    background: 'linear-gradient(to right bottom, #ff00cc, #333399)',
    color: "white",
    minHeight: "70vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
