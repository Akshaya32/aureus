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
  const [applyJob, setApplyJob] = useState(activeJob)
  const[file, setFile] = useState('');
  //Form Elements
  const [qualification, setQualification] = useState("");
  const [yearattained, setYearattained] = useState("");
  const [schoolname, setSchoolname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [qualificationname, setQualificationname] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [employmenttype, setEmploymenttype] = useState("");
  const [employmentperiod, setEmploymentperiod] = useState("");
  const [workdescription, setWorkdescription] = useState("");

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
    },
    footer: {
      marginTop: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  function deleteFile(){
    setFile()
  }
  return (
    <>
    <JobTitleContainer>
      <InnerContainer >
        <div style={styles.jobcontainer}>
          <div > <HiOfficeBuilding className='icon-primary' style={styles.icons}/> </div>
          <div style={styles.jobdescription} >
            <span className='secondary-text'>Application for</span>
            <h3 style={styles.jobtitle}>{applyJob.jobtitle}</h3>
            <span className='secondary-text'>{applyJob.companyName}</span>
          </div>
        </div>
        <div>
          <p style={styles.jobdetails} className = 'secondary-text'><HiLocationMarker />{applyJob.joblocation}</p>
          <p style={styles.jobdetails} className = 'secondary-text'>{applyJob.jobexperience}</p>
          <p style={styles.jobdetails} className = 'secondary-text'><BsStack />{applyJob.salaryrange}</p>
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
                <ResumeDisplay file = {file} deleteFile = {deleteFile} />
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
                        placeholder="Enter Qualification"
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
                          name="companyname"
                          value={companyname}
                          onChange={e => setCompanyname(e.target.value)}
                          placeholder="Company Name"
                          required
                        />
                    </label>
                </div>
                <div className = 'form-control col'>
                  <label>
                  <p>Job Title</p>
                      <input
                        type="text"
                        name="jobtitle"
                        value={jobtitle}
                        onChange={e => setJobtitle(e.target.value)}
                        placeholder="Job Title"
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
                        name="employmenttype"
                        value={employmenttype}
                        onChange={e => setEmploymenttype(e.target.value)}
                        placeholder="Enter Employment Type"
                        required
                      />
                  </label>
              </div>
              <div className = 'form-control col'>
                <label>
                <p>Employment Period</p>
                      <input
                        type="text"
                        name="employmentperiod"
                        value={employmentperiod}
                        onChange={e => setEmploymentperiod(e.target.value)}
                        placeholder="Employment Period"
                        required
                      />
                  </label>
              </div>

            </div>
            <div className>
              <div className = 'form-control'>
                <label>
                <p>Work Description (Optional)</p>
                      <textarea
                      rows="8" cols="90"
                        type="text"
                        name="workdescription"
                        value={workdescription}
                        onChange={e => setWorkdescription(e.target.value)}
                        placeholder="Enter Work Description"
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
              {applyJob?.skills.map((skill) => { 
                return (<Skill><Badge key={skill.id} text={skill.skill}  /></Skill>)
              })}
            </SkillContainer>
          </div>
        </JobCard>
        <div style= {styles.footer}>
          <button className = 'btn-primary'>Submit</button>
        </div>
      </form>

    </InnerContainer>
    </>
  )
}

export default BrowseJobs
