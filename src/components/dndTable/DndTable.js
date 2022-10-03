import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { DndRow } from './DndRow'
import { Table, TableBody, Card } from '@mui/material'
const style = {
  width: 400,
}
export function DndTable({data})
  {
    console.log(data)// Array of objects
    console.log(Object.getOwnPropertyNames(data[0]))// Array of atributes names of objects from that array. HEADCOLUMNS!!!!!
//     data.map(player =>{
//   return(console.log(player))
// })

    const [rows, setRows] = useState(data)
    const moveRow = useCallback((dragIndex, hoverIndex) => {
      setRows((prevRows) =>
        update(prevRows, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevRows[dragIndex]],
          ],
        }),
      )
    }, [])
    const renderRow = useCallback((row, index) => {
      return (
        <DndRow
          key={row.id}
          index={index}
          id={row.id}
          name={row.name}
          squadNumber={row.squadNumber}
          position={row.position}
          quality={row.quality}
          moveRow={moveRow}
        />
      )
    }, [])
    return (
      <Card>
      <Table>
        <TableBody style={style}>
          {rows.map((row, i) => renderRow(row, i))}
        </TableBody> 
      </Table>   
      </Card>           
    )
  }
