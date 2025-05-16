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
        rows.push(<td key={claves[i]}>{valores[i]}</td>)
    }

    
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
                  const keydelItem= Object.values(item)[0]
                  const Rows:ReactNode= getRows(item)
                  return (<tr key={keydelItem}>{Rows}</tr>);
                })} 
          </tbody>
        </table>
    </>
);}

export default Table;