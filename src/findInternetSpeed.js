const processDownloadData = ({
  duration,
  testImageSizeInBytes,
  idealInternetSpeed,
  slowInternetSpeed,
}) => {
  const internetSpeedInMbps = (
    (testImageSizeInBytes * 8) /
    duration /
    (1024 * 1024)
  ).toFixed(2);

  if (internetSpeedInMbps > idealInternetSpeed) {
    return "🟢";
  }
  if (internetSpeedInMbps > slowInternetSpeed) {
    return "🟠";
  }
  return "🔴";
};

export const findInternetSpeed = async ({ testImageUrl, ...rest }) => {
  const startTime = new Date().getTime();

  const download = new Image();

  const cacheBuster = "?nocache=" + startTime;
  let speedData = "🔴";
  download.src = testImageUrl + cacheBuster;

  // promise
  return new Promise((resolve, reject) => {
    try {
      download.onload = () => {
        speedData = processDownloadData({
          duration: (new Date().getTime() - startTime) / 1000,
          ...rest,
        });
        resolve(speedData);
      };

      download.onerror = (err) => {
        console.log("InternetStatus]", err);
        resolve(speedData);
      };
    } catch (error) {
      console.error("[InternetStatus]", error);
      reject(speedData);
    }
  });
};
