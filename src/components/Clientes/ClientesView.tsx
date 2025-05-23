import Table from '../Generics/Table'
import clientes from '../../mockdata/clientes.json'
import TableTitle from '../Generics/TableTitle';

const cliente:object[] = clientes
interface data{
    columnas:string[],
    registros:object[]
}

const GetData=(clientes:object[] )=>{
    console.log(clientes)
    const data:data ={
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
      <TableTitle className='align-middle' children={"Clientes"}/>
      <div className="align-middle">
        <Table data={GetData(cliente)}/>
      </div>
    </>
  )
}

export default ClientesView


