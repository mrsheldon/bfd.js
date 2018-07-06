const snekfetch = require('snekfetch');

class Client {
    constructor(id, token) {
        if (typeof token !== 'string') throw new TypeError('The bot token must be a string!');
        if (typeof id !== 'string') throw new TypeError('The bot ID must be a string!');
        this._baseURL = 'https://botsfordiscord.com/api/v1';
        this._token = token;
        this._id = id;
    }

    update(serverCount) {
        if (typeof serverCount !== 'number' && !(serverCount instanceof Array)) throw new TypeError('Server count is not a number.');
        snekfetch.post(this._baseURL + '/bots/' + this._id, {headers: { 'content-type': 'application/json', 'authorization': this._token }, data: {server_count: serverCount } })

        }
}


module.exports = Client;