import { useEffect } from "react";

const Home = () => {
  const fetchedResults = JSON.parse(
    localStorage.getItem("jobs_search_history")
  );
  return (
  <div>
    {fetchedResults && 
      fetchedResults.length &&
      fetchedResults.map((item) => <li>{item}</li> )}
  </div>
  );
};

export default Home;
