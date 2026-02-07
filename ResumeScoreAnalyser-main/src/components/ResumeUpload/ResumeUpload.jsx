import { useState } from "react";
import "./ResumeUpload.css";

const ResumeUpload = ({ onFileUpload ,uploaded}) => {
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // PDF validation
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file only");
      setFileName("");
      return;
    }

    // max size 2MB
    if (file.size > 2 * 1024 * 1024) {
      setError("File size should be less than 2MB");
      setFileName("");
      return;
    }

    setError("");
    setFileName(file.name);
    onFileUpload(file); 
  };

  return (
    <div className="upload-container">
    <label className={`upload-box ${uploaded ? 'success' : ''}`}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          hidden
        />
        <div className="upload-content">
  <div className="icon">{uploaded ? '✅' : '📄'}</div>
  <p className="title">
    {uploaded ? 'Resume uploaded successfully' : 'Click to upload resume'}
  </p>
  <p className="subtitle">
    {uploaded ? 'Analysis completed' : 'PDF only • Max 2MB'}
  </p>
</div>
      </label>

      <p className="mock-warning"> Analysis is mocked.</p>

      {fileName && <p className="file-name">Uploaded: {fileName}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ResumeUpload;
