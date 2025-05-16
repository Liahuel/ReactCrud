import React from 'react'
import Table from '../Generics/Table'
import clientes from '../../mockdata/clientes.json'

const cliente:[] = clientes
interface data{
    columnas:string[],
    registros:string[]
}

const GetData=(clientes:[])=>{
    let data:data ={
        columnas:[],
        registros:[]
    }
    clientes.map((item)=>{
        if(data.columnas.length ==0) data.columnas=Object.keys(item)
        data.registros.push(item)
    })
    return data;
}


function ClientesView(){
  return (
    <>
     <Table data={GetData(cliente)}/>
    </>
  )
}

export default ClientesView


