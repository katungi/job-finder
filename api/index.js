const express = require('express');
const app = express();
const port = 3001;

var redis = require('redis'),
  client = redis.createClient();

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github');

  // console.log(JSON.parse(jobs).length);
  return res.send(jobs);
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
