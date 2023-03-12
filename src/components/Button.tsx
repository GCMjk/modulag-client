import { useState } from 'react';
interface ButtonProps {
    text: string;
    type: 'button' | 'submit';
    loading: boolean;
}
export const Button = ({ text, type, loading }: ButtonProps) => {
    const [load, setLoading] = useState(false);
    
    return (
    <button
        type={type}
        className="flex w-full justify-center rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
    >
        { false ? (
            <svg className="w-4 h-4 animate-spin self-center mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        ) : null }
        { text }
    </button>
)}