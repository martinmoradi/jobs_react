const fetchParentJob = async (uuid, setCurrentParentJob) => {
  const response = await fetch(`http://api.dataatwork.org/v1/jobs/${uuid}`);
  const data = await response.json();
  if (data) {
    setCurrentParentJob(data);
  }
};

export default fetchParentJob;
