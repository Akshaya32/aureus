
import './App.css';
import Header from './components/Header'; 
import { createGlobalStyle } from 'styled-components';
import AppliedJobs from './pages/AppliedJobs';
import BrowseJobs from './pages/BrowseJobs';
import Profile from './pages/Profile';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import BrowsePage from './pages/BrowsePage';
const GlobalStyles = createGlobalStyle`
  html {
    --primary-text: #3083cb;
    --secondary-text: #555657;
    --color-background: white;
    --color-primary: #3083cb;
  }
`;
function App() {
  return (
<>
<GlobalStyles />
<BrowserRouter>
<Header />
       <Routes>
        <Route exact path="/browseJobs" element={<BrowsePage />}/>
		      <Route exact path="/appliedJobs" element={<AppliedJobs />}/>
				  <Route exact path="/browseJobs/applyJob/:id" element={<BrowseJobs />}/>
          <Route exact path="/profile/:id" element={<Profile />}/>
	    </Routes>
  </BrowserRouter>

{/* <Badge status = "Test" backgroundColor = "red" /> */}
</>
  );
}

export default App;
