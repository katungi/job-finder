var fetch = require('node-fetch');
var redis = require('redis'),
  client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
  let resultCount = 1;
  let onPage = 0;
  const allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(`found ${resultCount}, jobs`);
    onPage++;
  }

  console.log(`got , ${allJobs.length}, jobs`);

  // filter junior dev stuff
  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    let isJunior = true;

    // main algo logic

    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('architect')
    ) {
      return false;
    }

    return true;
  });

  console.log('filtered down to ', jrJobs.length);

  // set stuff to redis
  const success = await setAsync('github', JSON.stringify(jrJobs));
  console.log({ success });
}

fetchGithub();
module.exports = fetchGithub;
