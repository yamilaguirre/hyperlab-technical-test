import React, { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "w-full bg-dark-input border-transparent text-white placeholder-text-muted focus:border-primary focus:ring-primary rounded-xl shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
