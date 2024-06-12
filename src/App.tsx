import { RecoilRoot } from "recoil";
import "./App.css";
import Notifications from "./Notification";
import Count from "./Count";
import Todos from "./Todo";

function App() {
  return (
    <RecoilRoot>
      <div style={{ display: "flex", flexDirection: "column", gap: "20vh" }}>
        <div>
          <Todos />
        </div>
        <div>
          <Notifications />
        </div>
        <div>
          <Count />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
