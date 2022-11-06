import React from 'react'

import AppliedJobsCard from '../components/AppliedJobsCard';

const JobsList = ({selectedJob, jobList}) => {

  return (
    <div>
        {jobList.map((job) => {
            return <AppliedJobsCard key = {job.id} jobDetails = {job} showStatus = 'false' selectedJob = {selectedJob} />
        })}
      
    </div>
  )
}

export default JobsList
