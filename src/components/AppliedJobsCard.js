import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import { HiOfficeBuilding, HiLocationMarker, HiCurrencyDollar} from "react-icons/hi";
import { BsStack } from "react-icons/bs";
const Card = styled.div.attrs({
  className : 'CardContainer',
})`
  margin: 15px 0;
  padding: 20px;
  display: flex;
  min-height: 80px;
  justify-content: space-between;
`
const CardLogo = styled.div`
height: 100%;
`
const CardDescription = styled.div`
margin-left: 20px;

`
const LeftMenu = styled.div`
display: flex;

`
const RightMenu = styled.div`
text-align: center;
position: relative;
`


const AppliedJobsCard = (props) => {
  const styles = {
    icons: {
      borderRadius: '10px',
      backgroundColor: "#267cc6",
      padding: "0 2em",
      color: '#fff'
    },
    badgeAlign: {

    },
    secondaryText: {
      margin: '0 5px'
    },
    secIcon: {
      fontSize: '1rem',
      margin: '0 5px'
    }
  }
  const selectedJob = () => {
    props.selectedJob(props.jobDetails)
  }
  return (
    <Card onClick = {selectedJob}>
      <LeftMenu>
      <CardLogo > <HiOfficeBuilding className='icon-primary' style={styles.icons}/> </CardLogo>
      {props?.isEducation === true ? (
        <CardDescription>
          <h4>{props?.jobDetails?.degree}</h4>
          <p className='secondary-text'>{props?.jobDetails?.university}</p>
        </CardDescription>
      ): ( 
      <CardDescription>
        <h4>{props?.jobDetails?.jobtitle}</h4>
        <p className='secondary-text'>{props?.jobDetails?.companyName}</p>
        <p className='secondary-text'>{props?.jobDetails?.company}</p>
        <p className='secondary-text'>
          {(props?.jobDetails?.jobexperience) ? <span style = {styles.secondaryText}><BsStack style = {styles.secIcon}/>{props?.jobDetails?.jobexperience}</span> : ''}
          {(props?.jobDetails?.salaryrange) ? <span style = {styles.secondaryText}><HiCurrencyDollar style = {styles.secIcon} />{props?.jobDetails?.salaryrange}</span> : ''}
        </p>
        <p className='secondary-text'>{props?.jobDetails?.joblocation}</p>
        </CardDescription>)
        }
      </LeftMenu>
      {(props?.isJobs === true && props?.showStatus === true)? 
      (
      <RightMenu>
        <p className='secondary-text'>{props.jobDetails.appliedduration}</p>
        <div style = {styles.badgeAlign}>
        <Badge text = {props.jobDetails.status}/>
        </div>
        </RightMenu>
      ): ' '}
      {(props?.isEducation === true && props?.showStatus === true) ? (
        <RightMenu>
            <p className='secondary-text'>{props.jobDetails.period}</p>
        </RightMenu>
      ) : ''}
    </Card>
  )
}

export default AppliedJobsCard
