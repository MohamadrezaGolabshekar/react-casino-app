
export const debounce = (func: Function, delay?: number) => {
    let timeout: any;
    return function f() {
        const callNow = !delay && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;

            if (delay) {
                func();
            }
        }, delay);
        if (callNow) func();
    };
};
