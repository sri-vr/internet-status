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
          console.log("networkStatusRes", networkStatusRes);
          setNetworkStatus(networkStatusRes);
        },

        pingIntervalInSeconds * 1000
      );
    }
  };

  window.addEventListener("offline", () => {
    setNetworkStatus("🔴");
    window.clearInterval(window.setIntervalId);
    window.setIntervalId = null;
  });

  window.addEventListener("online", () => {
    startSpeedTest();
  });

  useEffect(() => {
    startSpeedTest();
    return () => window.clearInterval(window.setIntervalId);
  }, []);

  return <div>{networkStatus}</div>;
};

export default InternetStatus;
