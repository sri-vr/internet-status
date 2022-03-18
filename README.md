# internet-status

> A lightweight utility that finds out and outputs internet connection status on a browser

[![NPM](https://img.shields.io/npm/v/internet-status.svg)](https://www.npmjs.com/package/internet-status) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save internet-status
```

## Usage

```jsx
import React from "react";

import InternetStatus from "internet-status";

const App = () =>{
  <InternetStatus
  pingIntervalInSeconds="15",
  idealInternetSpeed="5", // Mbps
  slowInternetSpeed="1", // Mbps
  // Default image values
  testImageUrl = "https://res.cloudinary.com/dnsuxxqz1/image/upload/app/OE8Ie4TRdJgqyUGHCu8TDnzYIQH5TEoX.jpg",
  testImageSizeInBytes = "98715" />;
  }
```

| Prop                  | Options                                                                        |
| --------------------- | ------------------------------------------------------------------------------ |
| pingIntervalInSeconds | Ping interval in seconds / how often do you wanna check Status                 |
| idealInternetSpeed    | What is the ideal internet speed (Any speed above ideal is a 🟢 )              |
| slowInternetSpeed     | What is the slow internet speed (Any speed above slow is 🟠)                   |
| testImageUrl          | Url of a image preferably on your server, this will be used to check the speed |
| testImageSizeInBytes  | Size of the test image                                                         |

## Output

```
🟢 If internet connection is ideal
🟠 If internet connection is slow
🔴 If internet connection is less than slow or offline
```

## License

MIT © [Srivatsa-Rao](https://github.com/Srivatsa-Rao)
