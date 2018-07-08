[![NPM](https://nodei.co/npm/bfd.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bfd.js/)

# Getting Started
Simply Run `npm install bfd.js@4.1.3`

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
*Note: The wrapper automatically parses the JSON data!*

**Example of getting bot widget**

```javascript
const BFD = require("bfd.js");
const bfd = new BFD('Your Token');
bfd.getBotEmbed('bot-id');
```

**The Api Wrapper Supports Getting Verfied Bot! If bot not verfied it will return false if verifed returns true**

```javascript
const BFD = require("bfd.js");
const bfd = new BFD('Your Token');
const info = await bfd.isVerified('Bot ID');

console.log(info)  
```
