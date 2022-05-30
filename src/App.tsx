import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Loader } from "./components/Loader/Loader";
import { PathsRouter } from "./components/Routers/PathsRouter/PathsRouter";
import { app } from "./store/app.state";

export const App = observer(() => {
  useEffect(() => {
    app.connectWs(app.authKey)
  }, [])
  
  return (
    <div className="App">
      {app.loading ?
        <Loader status={app.loading} /> :
        <PathsRouter />
      }
    </div>
  );
})

export default App;
