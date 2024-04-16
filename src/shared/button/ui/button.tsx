import React from "react";
import cn from "classnames";

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    title: string;
}

export default function Button({ className, title, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={cn(className)}> 
            {title}
        </button>
    );
}