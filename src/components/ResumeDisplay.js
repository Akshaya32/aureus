
import styled from "styled-components";

const ResumeContainer = styled.div`
    padding: 15px 10px;
    border-radius: 12px;
    margin: 10px 0;
    background-color: var(--color-secondary);
`
const ResumeDisplay = ({file}) => {
  return (
        <ResumeContainer>
            <h4>
                {file.name}
            </h4>
        </ResumeContainer> 
  )
}

export default ResumeDisplay
