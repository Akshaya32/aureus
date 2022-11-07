
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
const SearchContainer = styled.input`
background: var(--color-secondary);
padding: 10px;
border:none;
border-radius: 15px;
width: 50%;
`
const SearchBar = ({placeholder, searchValue}) => {
  function handleChange(e){
    let value = e.target.value
    searchValue(value)
    //console.log(value)
  }
  return (
    <div id="input-container">
        <SearchContainer type = 'text' placeholder= {placeholder} onChange={(e) => {handleChange(e)}}/>
    </div>
  )
}

export default SearchBar
