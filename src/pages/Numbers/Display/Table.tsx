import { handleDelete, NumbersTableDataProps, NumbersTableProps } from "./helpers";

const Data = ({ id, value, refreshData }: NumbersTableDataProps) => (
    <tr className="text-left">
        <td className="text-left">{`Data id: ${id}`}</td>
        <td className="text-left">{`Value: ${value}`}</td>
        <td><button onClick={handleDelete(id, refreshData)}>X</button></td>
    </tr>
);

export const NumbersTable = ({ data, refreshData }: NumbersTableProps) => (
    <div id="table-wrapper" className="px-10">
        <table className="w-full">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Value</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {data.map(x => <Data key={x.id} refreshData={refreshData} {...x} />)}
            </tbody>
        </table>
    </div>
);