[](https://nodei.co/npm/bfd.js.png?downloads=true&downloadRank=true&stars=true)

# Getting Started
Simply Run `npm install bfd.js`

# Example
```javascript
const BFD = require('bfd.js');

const BFDClient = new BFD('Bot ID', 'User Token');

BFDClient.updateServerCount(client.guilds.size)
console.log("Server Count Updated")

BFDClient.getInfo('365958655926992896').then(bot => {

    console.log("Current Bot Username: "+ bot.prefix),

 BFDClient.getCurrentBot().then(bot => {

    console.log("Current Bot Username: "+ bot.prefix),

}) 
```
