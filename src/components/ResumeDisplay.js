
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
const ResumeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    border-radius: 12px;
    margin: 10px 0;
    background-color: var(--color-secondary);
`
const Icon = styled.div`
cursor: pointer;
padding-right: 10px;
display:flex;
align-items:center;
justify-content: center;
`
const styles = {
    icon: {
        color: 'var(--secondary-text)'
    }
}
const ResumeDisplay = ({file, deleteFile}) => {
  return (
        <ResumeContainer>
            <h4>
                {file.name}
            </h4>
            <Icon onClick={deleteFile}>
                <FaTrash style={styles.icon}/>
            </Icon>
        </ResumeContainer> 
  )
}

export default ResumeDisplay
