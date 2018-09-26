const snekfetch = require('snekfetch');
const API = 'https://botsfordiscord.com/api/';

class BFDAPI {
  constructor(token) {
    this.token = token;
  }
  _request(method, endpoint, data, auth) {
    const request = snekfetch[method](API + endpoint);
    if (method === 'post' && data) request.send(data);
    if (method === 'get' && data) request.query(data);
    if (auth) request.set({ Authorization: this.token });
    return request;
  }
  async postStats(serverCount, id) {
    if (!serverCount) throw new Error('postStats requires 2 argument');
    if (!id) throw new Error('Please enter a bot id for posting count');
    const data = {};
    data.server_count = serverCount;
    const response = await this._request('post', `bot/${id}`, data, true);
    return response.body;
  }
  async getBot(id) {
    if (!id) throw new Error('getBot requires id as argument');
    const response = await this._request('get', `bot/${id}`);
    const info = JSON.parse(response.text);
    return info;
  }
}

module.exports = BFDAPI;