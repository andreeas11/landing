import LandingPage from './components/LandingPage';
import './styles.css';
import { CSPostHogProvider } from './providers'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SendNewsletter from './components/SendNewsletter';

function App() {
  // return (
  //   // <CSPostHogProvider>

  //     <div>
  //       <LandingPage />
  //     </div>
  //   // </CSPostHogProvider>
  // );
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />}/>
        <Route path="/sendN" element={<SendNewsletter />} />
      </Routes>
    </Router>
  );
}

export default App;
