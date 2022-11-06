import React from 'react';
import styled from 'styled-components';
import { AppliedJobsModel } from '../models/AppliedJobsModel';
import AppliedJobsCard from '../components/AppliedJobsCard';
const JobsContainer = styled.div`
width: 55%;
margin: 0 auto;
`
const AppliedJobs = () => {
  return (
    <div>
        <JobsContainer>
        {AppliedJobsModel.map((job) => {
            return <AppliedJobsCard key = {job.id} jobDetails = {job} showStatus = {true} isJobs = {true}/>
        })}
        </JobsContainer>
    </div>
  )
}

export default AppliedJobs
