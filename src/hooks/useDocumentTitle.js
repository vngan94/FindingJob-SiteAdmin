import { useEffect } from "react";

function useDocumentTitle(title) {
  window.scrollTo(0, 0);
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
