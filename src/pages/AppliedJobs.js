import React, {useState} from 'react';
import styled from 'styled-components';
import { AppliedJobsModel } from '../models/AppliedJobsModel';
import AppliedJobsCard from '../components/AppliedJobsCard';
import SearchBar from '../components/SearchBar';
const JobsContainer = styled.div`
width: 55%;
padding-top: 50px;
margin: 0 auto;
`
const AppliedJobs = () => {
  const [jobsList, setJobslist] = useState(AppliedJobsModel)
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

  function searchValue(value) {
    if(value.length > 0){
      setJobslist(AppliedJobsModel.filter(job => {
        return job['jobtitle'].toLowerCase().match(value.toLowerCase())
      }))
    }
    else {
      setJobslist(AppliedJobsModel);
    }
  }
  return (
    <div>
        <JobsContainer>
          <SearchBar placeholder = 'Search applied jobs' searchValue = {searchValue}/>
        {jobsList.map((job) => {
          const color = JobStatusColor(job.status)
            return <AppliedJobsCard key = {job.id} jobDetails = {job} showStatus = {true} isJobs = {true} color= {color}/>
        })}
        </JobsContainer>
    </div>
  )
}

export default AppliedJobs
