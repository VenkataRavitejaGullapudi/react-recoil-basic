import { useRecoilState, useRecoilValue } from "recoil";
import {
  notifications,
  totalNotificationSelector,
} from "./store/atoms/notifications";
import { Suspense, useEffect } from "react";
import axios from "axios";

function Notifications() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    console.log("fetching");
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setTimeout(() => {
        setNetworkCount(res.data);
      }, 500);
    });
  }, []);

  return (
    <Suspense fallback={"Loading..."}>
      <button>Home</button>

      <button>
        My network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </Suspense>
  );
}

export default Notifications;
