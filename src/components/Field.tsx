import { FormikProps, Field as FormikField } from "formik";

interface FieldProps<T> extends FormikProps<T> {
    type: string,
    label?: string,
    name: keyof T,
}

export const Field = <T extends unknown>({
    type,
    name,
    errors,
    values,
    label,
}: FieldProps<T>) => {

    return (
        <div>
            {label && <label className="block text-sm font-bold">{label}</label>}
            <FormikField
                className="border border-black rounded py-1 px-2"
                value={values[name]}
                type={type}
                name={name}
            />
            
            {/* TODO: Conditionally render? UI moves when showing error - is this bad?
            (errors[name] && touched[name]) && */}
            <div className="text-red-500 text-sm min-h-[20px]">{errors[name] as string}</div>
        </div>
    )
}