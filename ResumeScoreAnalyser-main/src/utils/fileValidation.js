
export const validateFile = (file) => {
  if (!file) {
    return "No file selected";
  }

  if (file.type !== "application/pdf") {
    return "Only PDF files are allowed";
  }

  if (file.size > 2 * 1024 * 1024) {
    return "File size should be less than 2MB";
  }

  return null;
};
