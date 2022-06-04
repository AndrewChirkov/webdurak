import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Loader } from "./components/Loader/Loader";
import { Notify } from "./components/Notify/Notify";
import { PathsRouter } from "./components/Routers/PathsRouter";
import { app } from "./store/app.state";

export const App = observer(() => {
  useEffect(() => {
    app.connectWs(app.authKey);
  }, []);

  return (
    <div className="App">
      {app.loading ? <Loader loading={app.loading} /> : <PathsRouter />}
      <Notify />
    </div>
  );
});

export default App;
