import React from 'react';
import { HiOfficeBuilding } from "react-icons/hi";
import styled from 'styled-components';
import Badge from './Badge';

const Card = styled.div.attrs({
  className : 'CardContainer',
})`
  margin: 15px 0;
  padding: 20px;
  display: flex;
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
      position: 'absolute',
      bottom: '0'
    }
  }
  const selectedJob = () => {
    props.selectedJob(props.jobDetails)
  }
  return (
    <Card onClick = {selectedJob}>
      <LeftMenu>
      <CardLogo > <HiOfficeBuilding className='icon-primary' style={styles.icons}/> </CardLogo>
      <CardDescription>
        <h4>{props?.jobDetails?.jobtitle}</h4>
        <p className='secondary-text'>{props?.jobDetails?.companyName}</p>
        <p className='secondary-text'>{props?.jobDetails?.company}</p>
        <p className='secondary-text'>{props?.jobDetails?.jobexperience} {props?.jobDetails?.salaryrange}</p>
        <p className='secondary-text'>{props?.jobDetails?.joblocation}</p>
        </CardDescription>
      </LeftMenu>
      {props?.showStatus === true ? 
      (
      <RightMenu>
        <p className='secondary-text'>{props.jobDetails.appliedduration}</p>
        <div style = {styles.badgeAlign}>
        <Badge text = {props.jobDetails.status}/>
        </div>
        </RightMenu>
      ): ' '}

    </Card>
  )
}

export default AppliedJobsCard
