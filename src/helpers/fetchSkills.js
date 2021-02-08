const fetchSkills = async (uuid, setJobSkills) => {
  const response = await fetch(
    `http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`
  );
  const data = await response.json();
  if (data && data.skills) {
    const skills = data.skills.filter((skill, index) => index < 20);
    setJobSkills(skills);
  }
};

export default fetchSkills;
