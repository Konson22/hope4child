import { ErrorMessage, useField } from 'formik'

export default function InputField({label, key='', ...props}){

    const [field, meta] = useField(props)

    return(
        <div className="mb-4" key={key}>
            <label htmlFor={label}>{label}</label>
            <input
                className={`
                    lg:h-[3.5rem] h-[3rem] border 
                    border-gray-300 focus:border-green-500 rounded-xl focus:outline-none 
                    bg-gray-100 bg-opacity-75 w-full px-3 
                    ${(meta.touched && meta.error) ? 'border-b-red-500':''}
                `}
                placeholder={field.placeholder}
                disabled={props.isLoading}
                {...field}
                {...props}
            />
            <ErrorMessage component='div' name={field.name} className="text-red-500 text-sm mx-1" />
        </div>
    )
}