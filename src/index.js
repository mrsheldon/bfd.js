const snekfetch = require('snekfetch');
const API = 'https://botsfordiscord.com/api/v1/';

class BFDAPI {
  constructor(token, client) {
    this.token = token;
    if (client) {
      this.client = client;
      client.on('ready', () => {
        this.postStats();
        setInterval(() => {
          this.postStats();
        }, 1800000);
      });
    }
  }

  _request(method, endpoint, data, auth) {
    const request = snekfetch[method](API + endpoint);
    if (method === 'post' && data) request.send(data);
    if (method === 'get' && data) request.query(data);
    if (auth) request.set({ Authorization: this.token });
    return request;
  }

  async postStats(serverCount, id) {
    if (!this.token) throw new Error('This function requires a token to be set');
    if (!serverCount && !this.client) throw new Error('postStats requires 2 argument');
    if (!id) throw new Error('Please enter a bot id for posting count');
    const data = {};
    if (serverCount) {
      data.server_count = serverCount;
    } else {
      data.server_count = this.client.guilds.size;
    }
    const response = await this._request('post', `bots/${id}`, data, true);
    return response.body;
  }

  async getBot(id) {
    if (!id && !this.client) throw new Error('getBot requires id as argument');
    if (!id) id = this.client.user.id;
    const response = await this._request('get', `bots/${id}`);
    const info = JSON.parse(response.text);
    return info;
  }

  async getBotEmbed(id, size) {
    if (!id && !this.client) throw new Error('getBotEmbed requires id as argument');
    if (!id) id = this.client.user.id;
    const siz = `?width=${size}`
    if (!size) {
      size = "300";
    }
    return this._request('get', `bots/${id}/embed${siz}`);
  }

  async isVerified(id) {
    if (!id) throw new Error('You must provide an bot id')
    if (!this.token) throw new Error('This function requires a token to be set');
    const response = await this._request('get', `bots/${id}`);
    const info = JSON.parse(response.text);
    if(!info.verified) return 'false';
    if(info.verified) return 'true';
  }
}

module.exports = BFDAPI;