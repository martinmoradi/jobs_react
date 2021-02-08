import { useEffect } from "react";

const Home = () => {
  const fetchedResults = JSON.parse(
    localStorage.getItem("jobs_search_history")
  );
  return (
  <div>
    <h3 className="py-8 justify-center ml-10">You can see your search history here : </h3>
    {fetchedResults && 
      fetchedResults.length &&
      fetchedResults.map((item) => <li className="ml-10">{item}</li> )}
  </div>
  );
};

export default Home;
