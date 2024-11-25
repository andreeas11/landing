import LandingPage from './components/LandingPage';
import './styles.css';
import { CSPostHogProvider } from './providers'

function App() {
  return (
    // <CSPostHogProvider>
      <div>
        <LandingPage />
      </div>
    // </CSPostHogProvider>
  );
}

export default App;
