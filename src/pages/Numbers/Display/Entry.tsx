import { Form, Formik } from "formik";
import { useState } from "react";

import { Field } from "../../../components";
import { Button } from "../../../components/Button";
import {
    FormShape,
    handleSubmit,
    initialValues,
    numberInputSchema,
    NumbersEntryFormProps
} from "./helpers";

export const NumbersEntry = ({ refreshData }: NumbersEntryFormProps) => {
    const [serverMsg, setServerMsg] = useState("");

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={numberInputSchema}
                onSubmit={handleSubmit(setServerMsg, refreshData)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="flex space-x-3">
                            <Field<FormShape> name="value" type="number" label="Number input" {...formikProps} />
                            <Button className="my-5" label="Submit" type="submit" />
                            {serverMsg && <div className="h-100 flex"><p className="my-auto text-green-500">{serverMsg}</p></div>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}