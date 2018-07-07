[https://nodei.co/npm/jstrip.png?downloads=true&downloadRank=true&stars=true](https://npmjs.com/package/bfd.js)

# Getting Started
Simply Run `npm install bfd.js`

# Example
Post server count
```javascript
const BFD = require('bfd.js');

const BFDClient = new BFD('Bot ID', 'Bot Token');

BFDClient.postStats(client.guilds.size)
console.log("Server Count Updated")
```
Get bot info
```javascript
const BFD = require('bfd.js');
const BFDClient = new BFD('Bot ID', 'Bot Token');

DBGClient.getInfo('365958655926992896').then(bot => {

    console.log("Current Bot Username: "+ bot.username),
    console.log("Current Bot ID: "+ bot.id),
})
```
Get currect bot info
```javascript
const BFD = require('bfd.js');
const BFDClient = new BFD('Bot ID', 'Bot Token');
 DBGClient.getCurrentBot().then(bot => {

    console.log("Current Bot Username: "+ bot.username),
    console.log("Current Bot ID: "+ bot.discordid),

}) 
```