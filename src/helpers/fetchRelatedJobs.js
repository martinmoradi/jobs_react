const fetchRelatedJobs = async (uuid, setRelatedJobs) => {
  const response = await fetch(
    `http://api.dataatwork.org/v1/skills/${uuid}/related_jobs`
  )
  const data = await response.json()
  if (data) {
    setRelatedJobs(data)
  }
}

export default fetchRelatedJobs