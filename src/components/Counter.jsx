import { useEffect, useState } from "react";

const Counter = ({ start, end, duration, string }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let current = start;
        const range = end - start;
        const step = Math.abs(Math.floor(duration / range));
        const increment = end > start ? 1 : -1;

        const timer = setInterval(() => {
            current += increment;
            setCount(current);
            if (current === end) clearInterval(timer);
        }, step);

        return () => clearInterval(timer);
    }, [start, end, duration]);

    return <span className="text-4xl font-bold text-blue-500">{count}{string}</span>;
};

export default Counter;
