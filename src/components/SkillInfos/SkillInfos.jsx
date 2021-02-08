import { useState, useEffect } from "react";
import fetchRelatedJobs from "../../helpers/fetchRelatedJobs";
import { useParams } from "react-router-dom";

const SkillInfos = () => {
  const { skillUuid } = useParams();
  const [relatedJobs, setRelatedJobs] = useState();

  useEffect(() => {
    fetchRelatedJobs(skillUuid, setRelatedJobs);
  }, [skillUuid]);

  useEffect(() => {}, [relatedJobs]);

  return (
    <div>
      {relatedJobs && <h1>{relatedJobs.skill_name}</h1>}
      {relatedJobs &&
        relatedJobs.jobs &&
        relatedJobs.jobs
          .filter((job, index) => index < 20)
          .map((job) => <li>{job.job_title}</li>)}
    </div>
  );
};

export default SkillInfos;
