import axios from "axios";
import { useEffect, useState } from "react";
import { NumbersEntry } from "./Entry";
import { NumbersTable } from "./Table";

export const NumbersTablePage = () => {
    const [data, setData] = useState([])
    // const data = useDemoData();

    const refreshData = () => {
        axios.get("http://localhost:9001/test").then(x => setData(x.data.data))
    };

    useEffect(() => {
        refreshData()
    }, []);
    
    return (
        <>
            <NumbersEntry refreshData={refreshData} />
            <NumbersTable refreshData={refreshData} data={data} />
        </>
    )
}