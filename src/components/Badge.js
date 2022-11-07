
import styled from 'styled-components';
const BadgeDiv = styled.span`
font-size: 0.9rem;
width: fit-content;
color: white;
background: #f7a25a;
padding: 8px 13px;
border-radius: 5px;
`

const Badge = (props) => {  
  const toggleSelectedSkills = (skill) => {
    props.toggleSelectedSkills(skill)
  }
  return (

    <BadgeDiv style={{ background: props.color? props.color : 'var(--color-primary)' }} onClick = {() => toggleSelectedSkills(props.text)}>
      {props.text}
    </BadgeDiv>
  )
}

export default Badge
