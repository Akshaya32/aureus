import React from 'react';
import { useParams } from "react-router";
import styled from 'styled-components';
import AppliedJobsCard from '../components/AppliedJobsCard';
import { ProfileModel } from '../models/ProfileModel';

const ProfileContainer = styled.div`
width: 55%;
margin: 0 auto;
padding-top: 70px;
`
const UserCard = styled.div.attrs({
    className : 'CardContainer',
  })`
    width: 30%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
  `
const DetailsCard = styled.div.attrs({
  className : 'CardContainer',
})`
display: flex;
`
const styles = {
  usercard: {
    marginLeft: '25px'
  },
  userimage : {
    width: '100px'
  }
}
const Profile = () => {
    let { id } = useParams();
  return (
    <ProfileContainer>
        <UserCard>
          <div>
          <img src={require('./../assets/user_img.png')} style = {styles.userimage}  alt="userImage"/>
          </div>
          <div style={styles.usercard}>
              <h3>{ProfileModel.firstname + " " + ProfileModel.lastname} </h3>
              <span className='secondary-text'>{ProfileModel.email}</span>
          </div>
        </UserCard>
        <DetailsCard>

        </DetailsCard>
        <div>
          <h3>Education</h3>
          <AppliedJobsCard jobDetails = {ProfileModel.education}/>
        </div>
        <div>
          <h3>Work Experience</h3>
          <AppliedJobsCard jobDetails = {ProfileModel.workexperience}/>
        </div>
      
    </ProfileContainer>
  )
}

export default Profile
