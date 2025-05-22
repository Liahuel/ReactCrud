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
        rows.push(<td className="table-cell border-1 border-solid" key={claves[i]}>{valores[i]}</td>)
    }

    
    return rows
}



const Table:React.FC<TableProps> = ({data}) => {
    return (
    <>
        <table className="table-base bg-red-400  border-2 border-solid rounded-xl border-r">
          <thead>
            <tr className="table-head border-1 border-solid">
            {data?.columnas.map(function(item){
                return(<th  className="table-head-cell border-1 border-solid" key={item}>{item}</th>)
            })}
            </tr>
          </thead>
          <tbody>
                {data?.registros.map(function(item:object){
                  const keydelItem= Object.values(item)[0]
                  const Rows:ReactNode= getRows(item)
                  return (<tr className="table-row border-1 border-solid" key={keydelItem}>{Rows}</tr>);
                })} 
          </tbody>
        </table>
    </>
);}

export default Table;