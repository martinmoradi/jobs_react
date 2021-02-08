import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import SkillInfos from "../../components/SkillInfos/SkillInfos";

const Skill = () => {
  return (
    <>
      <Switch>
        <Route path="/skills/:skillUuid">
          <SkillInfos />
        </Route>
      </Switch>
    </>
  );
};

export default Skill;
