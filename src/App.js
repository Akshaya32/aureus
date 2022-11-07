
import './App.css';
import Header from './components/Header'; 
import { createGlobalStyle } from 'styled-components';
import AppliedJobs from './pages/AppliedJobs';
import BrowseJobs from './pages/BrowseJobs';
import Profile from './pages/Profile';
import { BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom';
import BrowsePage from './pages/BrowsePage';
import Signup from './pages/UserLogin';
const GlobalStyles = createGlobalStyle`
  html {
    --primary-text: #3083cb;
    --secondary-text: #555657;
    --color-orange: rgba(223, 136, 48 , 0.8);
    --color-green: rgba(78, 175, 56, 0.8);
    --color-red: rgba(221, 73, 38, 0.8);
    --color-primary: #3083cb;
    --color-secondary: rgba(226, 226, 226 , 0.4);
  }
`;
function App() {
  return (
<>
<GlobalStyles />
<BrowserRouter>
<Header />
       <Routes>
          <Route path="/" element={<Navigate replace to="/browseJobs" />} />
          <Route exact path="/browseJobs" element={<BrowsePage />}/>
		      <Route exact path="/appliedJobs" element={<AppliedJobs />}/>
          <Route exact path = "/signup" element={<Signup />} />
          <Route exact path = "/login" element={<Signup />} />
				  <Route exact path="/browseJobs/applyJob/:id" element={<BrowseJobs />}/>
          <Route exact path="/profile/:id" element={<Profile />}/>
	    </Routes>
  </BrowserRouter>

{/* <Badge status = "Test" backgroundColor = "red" /> */}
</>
  );
}

export default App;
