let timeout: any;
export const debounce = (func: Function, delay?: number) => {
    return function f(e?: any) {
        const callNow = !delay && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;

            if (delay) {
                func(e);
            }
        }, delay);
        if (callNow) func(e);
    };
};