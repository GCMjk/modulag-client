interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  handleChange: any
}

export const Input = ({ id, name, placeholder = '', type = 'text', value, handleChange }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        { name }
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}
