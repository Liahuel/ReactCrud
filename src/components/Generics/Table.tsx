import next from "next";
import tailwindcss from "@tailwindcss/vite";
import React from "react";

interface TableProps{
    data:{
        columnas:string[],
        registros:string[],
    }
}


function Table(props:TableProps){
    const {
        data:{
            columnas:[],
            registros:[],
        },
    }=props;
    console.log(props.data)
    return (
    <>
        <table>
            <thead>
                <tr>
                    {props.data.columnas && props.data.columnas.map((columna:string)=>
                        <th key={columna}></th>
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {props.data.registros && props.data.registros.map((registro:string)=>
                        <td key={registro}></td>
                    )}
                </tr>
            </tbody>
        </table>
    </>
);}

export default Table;