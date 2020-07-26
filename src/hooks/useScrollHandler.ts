import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { loadMoreAction } from "../Context/Actions"

function useScrollHandler(id: string) {
    const [wrappedElement, setWrappedElement]: any = useState(null);
    const [state, dispatch]: any = useAppContext();

    useEffect(() => {
        setWrappedElement(document.getElementById(id));
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [id])

    const isBottom = (el: any) =>
        state.hasItems &&
        el.getBoundingClientRect().bottom > 0 &&
        el.getBoundingClientRect().bottom <= window.innerHeight;

    const handleScroll = () => {
        const shouldLoad = isBottom(wrappedElement);
        if (shouldLoad && !state.isStartSearchItems) {
            dispatch(loadMoreAction());
        }
    }

    useEffect(() => {
        if (wrappedElement) {
            window.addEventListener('scroll', handleScroll, true);

            if (wrappedElement?.clientHeight < 650 && !state.isStartSearchItems && state.hasItems) {
                dispatch(loadMoreAction());
            }
        }
    }, [wrappedElement, state.isStartSearchItems]);

}

export default useScrollHandler;
