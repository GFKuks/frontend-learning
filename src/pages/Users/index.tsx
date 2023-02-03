import axios from "axios";
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

const handleSubmit = (setServerMsg: (value: React.SetStateAction<string>) => void) => {
    return (values: IFormShape) => {
        setServerMsg("");
        axios.post(
            "http://localhost:9001/test",
            { ...values },
        ).then(x => { setServerMsg(x.data) });
    }
}

export const UsersPage = () => {
    const [serverMsg, setServerMsg] = useState("");

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={testSchema}
                onSubmit={handleSubmit(setServerMsg)}
            >
                {(formikProps) => (
                    <Form>
                        <Field<IFormShape> name="name" type="string" label="Name" {...formikProps} />
                        <Field<IFormShape> name="phone" type="phone" label="Phone" {...formikProps} />
                        <Field<IFormShape> name="email" type="string" label="Email" {...formikProps} />
                        <Button type="submit" label="Submit" />
                        {serverMsg && <div className="text-green-500">{serverMsg}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}