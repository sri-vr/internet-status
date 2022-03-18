import React from "react";

import InternetStatus from "internet-status";

const App = () => {
  return <InternetStatus pingIntervalInSeconds="10" />;
};

export default App;
