import { getData } from "../api"

const Data = ({ id, value } : {id: number, value: number}) => (
    <div>
        {`Data id: ${id}, value: ${value}`}
    </div>
)

export const DataDisplayPage = () => {
    const data = getData();
    
    return (
        <div>
            {data.map(x => <Data key={x.id} {...x} />)}
        </div>
    )
}