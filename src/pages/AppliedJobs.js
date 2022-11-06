import React from 'react';
import styled from 'styled-components';
import { AppliedJobsModel } from '../models/AppliedJobsModel';
import AppliedJobsCard from '../components/AppliedJobsCard';
const JobsContainer = styled.div`
width: 55%;
margin: 0 auto;
`
const AppliedJobs = () => {
  const JobStatusColor = (status) => {
    switch(status) {
      case 'In Progress':
        return 'var(--color-orange)';
      case 'Accepted':
        return 'var(--color-green)';
      case 'Rejected':
        return 'var(--color-red)';
      default:
        return '';
    }

  }
  return (
    <div>
        <JobsContainer>
        {AppliedJobsModel.map((job) => {
          const color = JobStatusColor(job.status)
            return <AppliedJobsCard key = {job.id} jobDetails = {job} showStatus = {true} isJobs = {true} color= {color}/>
        })}
        </JobsContainer>
    </div>
  )
}

export default AppliedJobs
