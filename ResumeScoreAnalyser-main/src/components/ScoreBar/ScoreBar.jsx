import "./ScoreBar.css";

const ScoreBar = ({ score }) => {
  return (
    <div className="score-container">
      <h3 className="score-title">Resume Score: {score}%</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreBar;
