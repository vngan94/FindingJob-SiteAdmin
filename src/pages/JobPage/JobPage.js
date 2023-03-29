import ExploreTab from "../../components/ExploreTab";
import { useDocumentTitle } from "../../hooks";
import { SearchInputProvider } from "../../contexts/searchInputContext";

function JobPage() {
    useDocumentTitle("Tìm Việc Làm");
    return <>
        <SearchInputProvider>
            <ExploreTab />
        </SearchInputProvider>
    </>

}

export default JobPage;
