
export const debounce = (func: Function, delay?: number) => {
    let timeout: any;
    return function f(...args: any) {
        const callNow = !delay && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;

            if (delay) {
                func(...args);
            }
        }, delay);
        if (callNow) func(...args);
    };
};
