import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";import JobInfos from "../../components/JobInfos/JobInfos.jsx";

const Job = ( { setLocalStorageHistory } ) => {
  return (
    <>
      <Switch>
        <Route path="/jobs/:jobUuid">
          <JobInfos setLocalStorageHistory={setLocalStorageHistory} />
        </Route>
      </Switch>
    </>
  );
};

export default Job;
