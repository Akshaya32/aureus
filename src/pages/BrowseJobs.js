import React, { useState } from 'react'
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import { HiOfficeBuilding, HiLocationMarker} from "react-icons/hi";
import { BsStack } from "react-icons/bs";
import ResumeDisplay from '../components/ResumeDisplay';
import Badge from '../components/Badge';
const JobTitleContainer = styled.div`
  height: min-content;
  background-color: rgba(175, 233, 254  , 0.3);
`
const InnerContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px;
`
const JobCard = styled.div.attrs({
  className : 'CardContainer',
})`
  margin: 5px 0;
  padding: 30px;

`
const ResumeContainer = styled(JobCard)`

`
const ResumeCard = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`;
const SkillContainer = styled.div`
margin: 15px 0;
`
const Skill = styled.span`
margin: 0 8px;
`
const BrowseJobs = () => {
  const locationstate = useLocation();
  const activeJob = locationstate.state;
  const [selectedSkills, setSelectedSkills] = useState([]);
  const[file, setFile] = useState('');
  //Form Elements
  const [qualification, setQualification] = useState("");
  const [yearattained, setYearattained] = useState("");
  const [schoolname, setSchoolname] = useState("");
  const [qualificationname, setQualificationname] = useState("");
  const styles = {
    icons: {
      borderRadius: '10px',
      backgroundColor: "#267cc6",
      padding: "0 2em",
      color: '#fff'
    },
    jobcontainer: {
      display: 'flex'
    },
    jobdescription:{
      paddingLeft: '25px'
    },
    jobtitle: {
      margin: '5px 0'
    },
    jobdetails:{
      display: 'inline-block',
      marginTop: '25px',
      marginRight: '25px'
    }
  }
  const toggleSelectedSkills = (skill) => {
    const index = selectedSkills.indexOf(skill)
    console.log(index)
    if(index >= 0) {      
     selectedSkills.splice(0,index);
     return 'var(--color-primary)'
   } else {
     selectedSkills.push(skill)
     console.log(selectedSkills)
     return  'var(--color-secondary)' 
   }
  }
  const isSkillSelected = (skill) => {
    return selectedSkills.indexOf(skill) >= 0 ?  'var(--color-primary)' :  'var(--color-secondary)' 
    
  }
  function handleChange(event) {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
  return (
    <>
    <JobTitleContainer>
      <InnerContainer >
        <div style={styles.jobcontainer}>
          <div > <HiOfficeBuilding className='icon-primary' style={styles.icons}/> </div>
          <div style={styles.jobdescription} >
            <span className='secondary-text'>Application for</span>
            <h3 style={styles.jobtitle}>{activeJob.jobtitle}</h3>
            <span className='secondary-text'>{activeJob.companyName}</span>
          </div>
        </div>
        <div>
          <p style={styles.jobdetails} className = 'secondary-text'><HiLocationMarker />{activeJob.joblocation}</p>
          <p style={styles.jobdetails} className = 'secondary-text'>{activeJob.jobexperience}</p>
          <p style={styles.jobdetails} className = 'secondary-text'><BsStack />{activeJob.salaryrange}</p>
        </div>
      </InnerContainer>
    </JobTitleContainer>

    <InnerContainer>
      <form>
        <ResumeContainer>
          <ResumeCard>
            <div className='left-align'>
              <h3>Resume </h3>
              <span className = ''>Include one resume with your application</span>
            </div>
            <div className='right-align'>
            <label htmlFor="file-upload" className="btn-primary">
            Upload
            </label>
            <input id="file-upload" type="file" onChange={handleChange}/>
            </div>
          </ResumeCard>
          <div className=''>
              {file ? (
                <ResumeDisplay file = {file} />
              ) : ''}
            </div>
        </ResumeContainer>

        <JobCard>
          <div className='left-align'>
              <h3>Education </h3>
              <span className = ''>Select your highest qualification</span>
              <div className='row'>
                <div className = 'form-control col'>
                  <label>
                  <p>Qualification Type</p>
                        <input
                          type="text"
                          name="qualification"
                          value={qualification}
                          onChange={e => setQualification(e.target.value)}
                          placeholder="Qualification"
                          required
                        />
                    </label>
                </div>
                <div className = 'form-control col'>
                  <label>
                  <p>Year Attained</p>
                      <input
                        type="text"
                        name="yearattained"
                        value={yearattained}
                        onChange={e => setYearattained(e.target.value)}
                        placeholder="Year"
                        required
                      />
                  </label>
                </div>
              </div>
              <div className='row'>
              <div className = 'form-control col'>
                <label>
                <p>Name of School</p>
                      <input
                        type="text"
                        name="schoolname"
                        value={schoolname}
                        onChange={e => setSchoolname(e.target.value)}
                        placeholder="Enter School Name"
                        required
                      />
                  </label>
              </div>
              <div className = 'form-control col'>
                <label>
                <p>Qualification Name</p>
                      <input
                        type="text"
                        name="qualificationname"
                        value={qualificationname}
                        onChange={e => setQualificationname(e.target.value)}
                        placeholder="Year"
                        required
                      />
                  </label>
              </div>
            </div>
          </div>
        </JobCard>
        <JobCard>
        <div className='left-align'>
            <h3>Work Experience </h3>
            <span className = ''>Share your relavant work experience</span>
            <div>
            <div className='row'>
                <div className = 'form-control col'>
                  <label>
                  <p>Company Name</p>
                        <input
                          type="text"
                          name="qualification"
                          value={qualification}
                          onChange={e => setQualification(e.target.value)}
                          placeholder="Qualification"
                          required
                        />
                    </label>
                </div>
                <div className = 'form-control col'>
                  <label>
                  <p>Job Title</p>
                      <input
                        type="text"
                        name="yearattained"
                        value={yearattained}
                        onChange={e => setYearattained(e.target.value)}
                        placeholder="Year"
                        required
                      />
                  </label>
                </div>
              </div>
              <div className='row'>
              <div className = 'form-control col'>
                <label>
                <p>Employment Type</p>
                      <input
                        type="text"
                        name="schoolname"
                        value={schoolname}
                        onChange={e => setSchoolname(e.target.value)}
                        placeholder="Enter School Name"
                        required
                      />
                  </label>
              </div>
              <div className = 'form-control col'>
                <label>
                <p>Employment Period</p>
                      <input
                        type="text"
                        name="qualificationname"
                        value={qualificationname}
                        onChange={e => setQualificationname(e.target.value)}
                        placeholder="Year"
                        required
                      />
                  </label>
              </div>

            </div>
            <div className='row'>
              <div className = 'form-control'>
                <label>
                <p>Work Description (Optional)</p>
                      <input
                        type="text"
                        name="qualificationname"
                        value={qualificationname}
                        onChange={e => setQualificationname(e.target.value)}
                        placeholder="Year"
                        required
                      />
                  </label>
              </div>
              </div>
            </div>
          </div>
        </JobCard>
        <JobCard>
        <div className='left-align'>
            <h3>Skills </h3>
            <span className = ''>Add the skills you possess</span>
            <SkillContainer>  
              {activeJob?.skills.map(skill => { 
                return (<Skill><Badge text={skill} toggleSelectedSkills = {toggleSelectedSkills} color = {isSkillSelected(skill)}  /></Skill>)
              })}
            </SkillContainer>
          </div>
        </JobCard>
      </form>

    </InnerContainer>
    </>
  )
}

export default BrowseJobs
