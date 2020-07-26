import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import {loadMoreAction} from "../Context/Actions"

function useScrollHandler(id: string) {
    const [wrappedElement, setWrappedElement]: any = useState(null);
    const [state, dispatch]: any = useAppContext();
    
    useEffect(() => {
        setWrappedElement(document.getElementById(id));
    }, [])

    const isBottom = (el: any) => el.getBoundingClientRect().bottom <= window.innerHeight;

    const handleScroll = () => {
        // console.log("--------", isBottom(wrappedElement))
        // console.log("wrappedElement?.clientHeight ", wrappedElement?.clientHeight)
        if (isBottom(wrappedElement) && !state.isStartSearchItems) {
            console.log(1111)
            dispatch(loadMoreAction());
        }
    }

    useEffect(() => {
        console.log("id :: ", id)
        if (wrappedElement) {
            window.addEventListener('scroll', handleScroll, true);

            if (wrappedElement?.clientHeight < 650 && !state.isStartSearchItems) {
                console.log(2222, state.isStartSearchItems)
                dispatch(loadMoreAction());
            }
        }
        return () => {
            document.removeEventListener('scroll', handleScroll)
        };
    }, [wrappedElement, state.isStartSearchItems]);

}

export default useScrollHandler;
