import { useState, useEffect } from "react";
import fetchJob from "../../helpers/fetchJob";
import fetchSkills from "../../helpers/fetchSkills";
import fetchParentJob from "../../helpers/fetchParentJob";
import { Link, useParams } from "react-router-dom";
import historyHelper from "../../helpers/historyHelper";

const JobInfos = () => {
  const { jobUuid } = useParams();
  const [currentJob, setCurrentJob] = useState();
  const [jobSkills, setJobSkills] = useState();
  const [parentJob, setParentJob] = useState();

  useEffect(() => {
    fetchJob(jobUuid, setCurrentJob);
    fetchSkills(jobUuid, setJobSkills);
  }, [jobUuid]);

  useEffect(() => {
    if (currentJob) {
      fetchParentJob(currentJob.parent_uuid, setParentJob);
      historyHelper(currentJob.title);
    }
  }, [currentJob]);

  return (
    <div className="ml-12">
      {currentJob && <h1>{currentJob.title}</h1>}
      {parentJob && <h2>{parentJob.title}</h2>}
      {parentJob && <p>{parentJob.description}</p>}
      {jobSkills &&
        jobSkills.map((skill) => (
          <Link to={`/skills/${skill.skill_uuid}`} key={skill.uuid}>
            <li className="ml-12">
              <strong>{skill.skill_name} :</strong> {skill.description}
            </li>
          </Link>
        ))}
    </div>
  );
};

export default JobInfos;
