import React, { useEffect, useState } from "react";
import { findInternetSpeed } from "./findInternetSpeed";

const InternetStatus = ({
  pingIntervalInSeconds = 15,
  idealInternetSpeed = 5,
  slowInternetSpeed = 1,
  testImageUrl = "https://res.cloudinary.com/dnsuxxqz1/image/upload/app/OE8Ie4TRdJgqyUGHCu8TDnzYIQH5TEoX.jpg",
  testImageSizeInBytes = "98715",
}) => {
  const [networkStatus, setNetworkStatus] = useState("🟢");

  const startSpeedTest = () => {
    if (!window.setIntervalId) {
      window.setIntervalId = window.setInterval(
        async () => {
          const networkStatusRes = await findInternetSpeed({
            idealInternetSpeed,
            slowInternetSpeed,
            testImageUrl,
            testImageSizeInBytes,
          });
          setNetworkStatus(networkStatusRes);
        },

        pingIntervalInSeconds * 1000
      );
    }
  };

  const handleOnline = () => {
    startSpeedTest();
  };

  const handleOffline = () => {
    setNetworkStatus("🔴");
    window.clearInterval(window.setIntervalId);
    window.setIntervalId = null;
  };

  window.addEventListener("offline", handleOffline);

  window.addEventListener("online", handleOnline);

  useEffect(() => {
    startSpeedTest();
    return () => {
      window.clearInterval(window.setIntervalId);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <div>{networkStatus}</div>;
};

export default InternetStatus;
