import "./Suggestions.css";

const Suggestions = ({ suggestions }) => {
  return (
    <div className="suggestions-container">
      <h3>Suggestions for Improvement</h3>

      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>
            <span className="check">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
