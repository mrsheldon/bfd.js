[![NPM](https://nodei.co/npm/bfd.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bfd.js/)

# Getting Started
Simply Run `npm install bfd.js@latest`

## Usage

**Example of posting a bots servercount to the API**
```javascript
const BFD = require("bfd.js");
const bfd = new BFD('Your Token');
bfd.postStats('your server count', 'your bot id');
```

**Example of getting bot info**

```javascript
const BFD = require("bfd.js");
const bfd = new BFD('Your Token');
bfd.getBot('bot-id');
```