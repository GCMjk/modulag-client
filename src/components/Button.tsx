interface ButtonProps {
    text: string;
    type: 'button' | 'submit';
}
export const Button = ({ text, type }: ButtonProps) => {
    return (
    <button
        type={type}
        className="flex w-full justify-center rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
    >
        { text }
    </button>
)}