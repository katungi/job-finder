import fetch from 'node-fetch';
import React from 'react';
import Jobs from './Jobs';
import './App.css';

const JOB_API_URL = 'http://localhost:3001/jobs';
// const mockJobs = [
//   { title: 'SWE 1', company: 'Google' },
//   { title: 'SWE 1', company: 'Facebook' },
//   { title: 'SWE 1', company: 'Amazon' },
//   { title: 'SWE 1', company: 'Netflix' },
//   { title: 'SWE 1', company: 'Tesla' },
// ];
async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);
}
function App() {
  const [jobList, updateJobs] = React.useState([]);
  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className='App'>
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
