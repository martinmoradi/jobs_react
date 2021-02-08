const historyHelper = (job) => {
  const fetchedResults = JSON.parse(
    localStorage.getItem("jobs_search_history")
  );
  let historyToSave = [];
  if (!fetchedResults) {
    historyToSave.push(job);
    localStorage.setItem("jobs_search_history", JSON.stringify(historyToSave));
    return;
  }  
  if (fetchedResults.includes(job)) return;
  if (fetchedResults.length <= 4) {
    historyToSave = [...fetchedResults, job];
    localStorage.setItem("jobs_search_history", JSON.stringify(historyToSave));
  } else {
    historyToSave = [...fetchedResults.splice(1, 4), job];
    localStorage.setItem("jobs_search_history", JSON.stringify(historyToSave));
  }
};

export default historyHelper;
