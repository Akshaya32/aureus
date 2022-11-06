import React from 'react'
import JobsList from './JobsList';
import styled from 'styled-components';
import { useState } from 'react';
import JobDetails from './JobDetails';
import { PostedJobsModel } from '../models/PostedJobsModel';
const HomeContainer = styled.div`
width: 75%;
margin: 0 auto;
`
const JobListContainer = styled.div`
width: 30%;
float: left;
`
const JobDescriptionContainer = styled.div`
float: right;
width: 65%;
`
const BrowsePage = () => {
    const [selectedJob, setSelectedJob] = useState(PostedJobsModel[0]);
    const activeJob = (job) => {
        setSelectedJob(job);
    }
  return (
    <div>
        <HomeContainer>
            <JobListContainer><JobsList selectedJob = {activeJob} jobList = {PostedJobsModel} /></JobListContainer>
            <JobDescriptionContainer><JobDetails activeJob = {selectedJob}/></JobDescriptionContainer>
        </HomeContainer>
    </div>
  )
}

export default BrowsePage
