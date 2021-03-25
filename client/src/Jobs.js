import React from 'react';
import { Typography } from '@material-ui/core';
import Job from './Job';

function Jobs({ jobs }) {
  return (
    <div className='jobs'>
      <Typography variant='h1'>Entry Level Software Jobs</Typography>
      {jobs.map((job) => (
        <Job job={job} key={job.company} />
      ))}
    </div>
  );
}

export default Jobs;
