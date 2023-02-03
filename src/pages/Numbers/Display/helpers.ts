
import axios from "axios";
import * as Yup from "yup";

// Types
export type NumbersEntryFormProps = {
    refreshData: () => void;
}

export type NumbersTableProps = {
    refreshData: () => void;
    data: any[];
}

export type NumbersTableDataProps = {
    id: number;
    value: number;
    refreshData: () => void;
}

export type FormShape = {
    value: number | null;
}

// Formik
  
export const initialValues: FormShape = {
    value: null,
}

export const numberInputSchema = Yup.object().shape({
    value: Yup.number().nullable()
        .required("Number is required")
        .test(
            "test-label",
            "Number must be greater than 0!",
            value => value >= 0
        ),
});

// API requests

export const handleSubmit = (
    setServerMsg: (value: React.SetStateAction<string>) => void,
    refreshData: () => void,
) => {
    return (values: FormShape) => {
        setServerMsg("");
        axios.post("http://localhost:9001/test", { ...values })
            .then(x => { setServerMsg(x.data) })
            .finally(() => refreshData());
    }
}

export const handleDelete = (id: number, refreshData: () => void) => {
    return () => axios.delete(`http://localhost:9001/test/${id}`).then(() => refreshData())
}