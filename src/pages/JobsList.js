import React from 'react'
import { PostedJobsModel } from '../models/PostedJobsModel';
import AppliedJobsCard from '../components/AppliedJobsCard';

const JobsList = ({selectedJob}) => {

  return (
    <div>
        {PostedJobsModel.map((job) => {
            return <AppliedJobsCard key = {job.id} jobDetails = {job} showStatus = 'false' selectedJob = {selectedJob} />
        })}
      
    </div>
  )
}

export default JobsList
