import type { ReactNode } from "react";
interface TableProps{
    data:{
        columnas:string[],
        registros:object[],
    }
}

const getRows = (item:object)=>{
    const rows:ReactNode[]=[]
    const claves:string[] =Object.keys(item)
    const valores:string[]=Object.values(item)
    for(let i=0; i< claves.length; i++){
        rows.push(<td className="table-cell border-1 border-solid p-2 rounded-br-md" key={claves[i]}>{valores[i]}</td>)
    }

    
    return rows
}



const Table:React.FC<TableProps> = ({data}) => {
    return (
    <>
        <div className="">
            <table className="rounded-md outline-solid outline-1">
            <thead>
                <tr className="">
                {data?.columnas.map(function(item,currentValue){
                    return(<th  className={ "bg-red-400 table-head-cell border-solid border-l-1" + (currentValue==0 ? "  rounded" :"aa")} key={item}>{item}</th>)
                })}
                </tr>
            </thead>
            <tbody>
                    {data?.registros.map(function(item:object){
                    const keydelItem= Object.values(item)[0]
                    const Rows:ReactNode= getRows(item)
                    return (<tr className={"table-row border-1 border-solid m-4 rounded-br-md"} key={keydelItem}>{Rows}</tr>);
                    })} 
            </tbody>
            </table>
        </div>
    </>
);}

export default Table;