[![NPM](https://nodei.co/npm/bfd.js.png)](https://nodei.co/npm/<package>/)
# Getting Started
Simply Run `npm install bfd.js`

# Example
```javascript
const BFD = require('bfd.js');

const BFDClient = new BFD('Bot ID', 'Bot Token');

BFDClient.update(client.guilds.size)
console.log("Server Count Updated")

BFDClient.getInfo('365958655926992896').then(bot => {

    console.log("Current Bot Username: "+ bot.prefix),

 BFDClient.getCurrentBot().then(bot => {

    console.log("Current Bot Username: "+ bot.prefix),

}) 
```
