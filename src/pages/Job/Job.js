import ExploreTab from "../../components/ExploreTab";
import {useDocumentTitle} from "../../hooks";

function Job() {
    useDocumentTitle("Tìm Việc Làm");
    return <>
        <ExploreTab />
    </>

}

export default Job;
