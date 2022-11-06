
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
  return (
    <BadgeDiv>
      {props.text}
    </BadgeDiv>
  )
}

export default Badge
