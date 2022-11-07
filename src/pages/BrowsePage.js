import React, {useState} from 'react'
import JobsList from './JobsList';
import styled from 'styled-components';
import JobDetails from './JobDetails';
import { PostedJobsModel } from '../models/PostedJobsModel';
import SearchBar from '../components/SearchBar';
const HomeContainer = styled.div`
width: 75%;
margin: 0 auto;
`
const FilterContainer = styled.div`
padding: 25px 0;
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
    const postedJobs = PostedJobsModel;
    const [selectedJob, setSelectedJob] = useState(PostedJobsModel[0]);
    const [jobslist, setJobslist] = useState(PostedJobsModel)
    const activeJob = (job) => {
        setSelectedJob(job);
    }
    function searchValue(value) {
      if(value.length > 0){
        setJobslist(postedJobs.filter(job => {
          return (job.jobtitle.toLowerCase().match(value.toLowerCase()) || job.companyName.toLowerCase().match(value.toLowerCase()) || job.joblocation.toLowerCase().match(value.toLowerCase()))
        }))
      }
      else {
        setJobslist(postedJobs);
      }
    }
  return (
    <div>
        <HomeContainer>
            <FilterContainer><SearchBar placeholder = 'Search jobs by title, industry, location' searchValue = {searchValue}/></FilterContainer>
            <JobListContainer><JobsList selectedJob = {activeJob} jobList = {jobslist} /></JobListContainer>
            <JobDescriptionContainer><JobDetails activeJob = {selectedJob}/></JobDescriptionContainer>
        </HomeContainer>
    </div>
  )
}

export default BrowsePage
