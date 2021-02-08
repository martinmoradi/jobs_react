const autoComplete = async (input, setSuggestions) => {
  const response = await fetch(
    `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${input}`
  );
  const data = await response.json();
  if (data && data.length) {
    const jobs = data.filter((job, index) => index < 4);
    setSuggestions(jobs);
  }
};

export default autoComplete;
