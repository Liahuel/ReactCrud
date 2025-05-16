import type { ReactNode } from "react";



interface TableProps{
    data:{
        columnas:string[],
        registros:object[],
    }
}

const getRows = (valores:unknown[])=>{
    const rows:ReactNode[]=[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    valores.forEach((x:any)=>{
        rows.push(<td>{x}</td>)

    })
    
    return rows
}



function Table(props:TableProps){
    const {
        data:{
            // eslint-disable-next-line no-empty-pattern
            columnas:[],
            // eslint-disable-next-line no-empty-pattern
            registros:[],
        }
    }=props;
    console.log(props.data)
    return (
    <>
        <table>
          <thead>
            <tr>
            {props.data.columnas.map(function(item){
                return(<th key={item}scope="col">{item}</th>)
            })}
            </tr>
          </thead>
          <tbody>
                {props.data.registros.map(function(item:object){
                  const valores:unknown[]=Object.values(item);
                  const Rows:ReactNode= getRows(valores)
                  return (<tr>{Rows}</tr>);
                })} 
          </tbody>
        </table>
    </>
);}

export default Table;