import { getData } from "../api"

const Data = ({ id, value } : {id: number, value: number}) => (
    <tr>
        <td>{`Data id: ${id}`}</td>
        <td>{`Value: ${value}`}</td>
    </tr>
)

export const DataDisplayPage = () => {
    const data = getData();
    
    return (
        <table>
            <tr>
                <th className="font-bold">Id</th>
                <th>Value</th>
            </tr>
            {data.map(x => <Data key={x.id} {...x} />)}
        </table>
    )
}