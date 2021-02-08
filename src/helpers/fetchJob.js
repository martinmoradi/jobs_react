const fetchJob = async (uuid, setCurrentJob) => {
  const response = await fetch(`http://api.dataatwork.org/v1/jobs/${uuid}`);
  const data = await response.json();
  if (data) {
    setCurrentJob(data);
  }
};

export default fetchJob;
