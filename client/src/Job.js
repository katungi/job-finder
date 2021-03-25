import React from 'react';

function Job({ job }) {
  return (
    <div className={'job'}>
      {job.title}
      {job.company}
      <hr></hr>
    </div>
  );
}

export default Job;
