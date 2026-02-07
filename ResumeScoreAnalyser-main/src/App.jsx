import { useState } from "react";
import "./index.css"; 
import ResumeUpload from "./components/ResumeUpload/ResumeUpload";
import Loader from "./components/Loader/Loader";
import ScoreBar from "./components/Scorebar/ScoreBar";
import Suggestions from "./components/Suggestions/Suggestions";

import { calculateScore } from "./utils/scorecalculator";
import { suggestionsList } from "./data/suggestions";
import Hero from "./components/HeroSection/Hero";

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileUpload = (file) => {
    setResumeFile(file);
    setLoading(true);
    setScore(null);
    // mocked analysis delay
    setTimeout(() => {
      const calculatedScore = calculateScore();
      setScore(calculatedScore);
      setLoading(false);
      setUploaded(true);
    }, 5000);
  };

  return (
<>
<div className="hero-section"> <div><Hero></Hero></div></div>
    <div className="app-container">
      <h1 className="app-title">Resume Score Analyzer</h1>

      <ResumeUpload onFileUpload={handleFileUpload} 
      uploaded={uploaded}
      />

      {loading && <Loader />}

      {score !== null && (
        <>
          <ScoreBar score={score} />
          <Suggestions suggestions={suggestionsList} />
        </>
      )}
    </div>
    </>
  );
}

export default App;
