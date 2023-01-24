import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { Field } from "../../components";
import { Button } from "../../components/Button";

interface IFormShape {
    name: string;
    phone: string;
    email: string;
}
  
const testSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});
  
const initialValues: IFormShape = {
    name: "",
    phone: "",
    email: "",
}

export const DataEntryPage = () => {
    const [successCount, setSuccessCount] = useState(0);

    return (
        <div>
            <h1>{`Successful submits: ${successCount}`}</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={testSchema}
                onSubmit={values => {
                    setSuccessCount(count => count + 1);    
                }}
            >
                {(formikProps) => (
                    <Form>
                        <Field<IFormShape> name="name" type="string" label="Name" {...formikProps} />
                        <Field<IFormShape> name="phone" type="phone" label="Phone" {...formikProps} />
                        <Field<IFormShape> name="email" type="string" label="Email" {...formikProps} />
                        <Button type="submit" label="Submit" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}