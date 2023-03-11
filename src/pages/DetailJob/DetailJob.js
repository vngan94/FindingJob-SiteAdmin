import { useParams } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

import { get } from "../../utils/axiosAPI";
import GlintContainer from "../../components/GlintContainer";
import OpportunitySticky from "../../components/OpportunitySticky";
import Opportunity from "../../components/Opportunity";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

export const JobContext = createContext();

function DetailJob() {
  console.log("Render DetailJob");
  const { _id } = useParams(); // id must match id in url
  const [job, setJob] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const res = await get(`job/detail?id=${_id}`);
      setJob(res.data);
    }
    fetchApi();
  }, []);
  return <>
    <JobContext.Provider value={job}>
      {/* breadcrumpm has not completed yet */}
      <BreadCrump />
      <GlintContainer>
        <Opportunity />
      </GlintContainer>
      <OpportunitySticky />
    </JobContext.Provider>
  </>
}

export default DetailJob;
