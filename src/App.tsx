import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AppLayout from './components/AppLayout';
import Hero from './Hero';
import Project from './Project';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import AuthCallback from './pages/AuthCallback';

const Home = () => (
  <>
    <Hero />
    <hr />
    <Project />
    <br />
    <hr />
  </>
);


const App = () => (
  <ThemeProvider>
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </AppLayout>
    </Router>
  </ThemeProvider>
);

export default App;
