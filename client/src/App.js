import React from 'react';
import Jobs from './Jobs';

const mockJobs = [
  { title: 'SWE 1', company: 'Google' },
  { title: 'SWE 1', company: 'Facebook' },
  { title: 'SWE 1', company: 'Amazon' },
  { title: 'SWE 1', company: 'Netflix' },
  { title: 'SWE 1', company: 'Tesla' },
];
function App() {
  return (
    <div className='App'>
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
