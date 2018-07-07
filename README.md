[![NPM](https://nodei.co/npm/bfd.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bfd.js/)

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

BFDClient.getInfo('365958655926992896').then(bot => {

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