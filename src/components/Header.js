import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom'

const Nav = styled.div`
    font-weight: 500;
    height: 70px;
    box-shadow: 60px 0px 50px rgb(0 0 0 / 5%);
    display:flex;
    justify-content: space-around;
    align-items: center;
`
const LeftMenu = styled.div`
color: var(--primary-text);
`
const RightMenu = styled.div`
    display: flex;

`
const Links = styled.span`
    margin: 0 20px;
`
const Profile = styled.div`
    margin: 0 30px ;
`
const styles = {
    icon: {
        color: 'var(--primary-text)',
        marginRight: '5px',
        fontSize: '1.4rem'
    }
}
const Header = () => {
    let location = useLocation();
    console.log(location.pathname);
  return (
    <Nav>
        <LeftMenu>
        <NavLink to='/browseJobs' className='is-active'>QuickJobs</NavLink>    
        </LeftMenu>
        <RightMenu>
            {location.pathname === '/login' ? (            
            <Links>
                <NavLink to='/signup' className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Sign Up</NavLink>
            </Links>
            ):(
            <Links>
                <NavLink to='/login' className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Login</NavLink>
            </Links>
            )}
            {(location.pathname === '/signup' || location.pathname === '/login') ? '' : (
                <>
                    <Links>
                        <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Applied Jobs</NavLink>
                    </Links>
                    <Links>
                        <NavLink to='/browseJobs' className={({ isActive }) => (isActive ? 'is-active' : 'is-inactive')}>Browse Jobs</NavLink>
                    </Links>
                    <Profile>
                        <FaUserCircle style={styles.icon}/> <NavLink to ='/profile/1' >Jonathan Doe</NavLink>
                    </Profile>
                </>
            )}
        </RightMenu>
    </Nav>
  )
}

export default Header
