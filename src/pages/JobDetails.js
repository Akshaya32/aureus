import React from 'react'
import styled from 'styled-components';
import { HiOfficeBuilding } from "react-icons/hi";
import Badge from '../components/Badge';
import { useNavigate } from 'react-router-dom';
// const JobDetailsContainer = styled.div`
// margin: 15px;

// `
const JobDetailsContainer = styled.div.attrs({
  className : 'CardContainer',
})`
  margin: 15px 0;
  padding: 30px;
  height: 80vh;
`
const Container = styled.div`
margin: 20px 0;
min-height: 100px;
display: flex;
justify-content: space-between;
`
const SecondaryContainer = styled.div`
margin: 30px 0;
`
const styles = {
  icons: {
    borderRadius: '10px',
    backgroundColor: "#267cc6",
    padding: "0 2em",
    color: '#fff'
  },
  skillsContainer: {
    margin: '20px 0'
  },
  skillsbadge: {
    marginTop: '10px',
    marginRight: '15px'
  }
}
const JobDetails = ({activeJob}) => {
  const navigate = useNavigate();
    const goToBrowse = () => {
      navigate('/browseJobs/applyJob/'+ activeJob.id , {state: activeJob})
    }
  return (

    <JobDetailsContainer>
        <Container>
          <div > <HiOfficeBuilding className='icon-primary' style={styles.icons}/> </div>
          <div>
            <button className='btn-primary' onClick={goToBrowse}>Apply</button>
          </div>
        </Container>
        <Container>
          <div>
            <h3>{activeJob.jobtitle}</h3>
            <span className='primary-text'>{activeJob.companyName}</span>
          </div>
        </Container>
        <SecondaryContainer >
          <h4>Job Description</h4>
          <p className='primary-text'>{activeJob.jobdescription}</p>
        </SecondaryContainer>
        <SecondaryContainer >
          <h4>Skills</h4>
          <div style={styles.skillsContainer}>
          {activeJob?.skills?.map(skill => {
            return <span key={skill.id} style = {styles.skillsbadge}><Badge text= {skill.skill}/></span>
          })}
          </div>
        </SecondaryContainer>
    </JobDetailsContainer>
  )
}

export default JobDetails
