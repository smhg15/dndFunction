import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { DndRow } from './DndRow'
const style = {
  width: 400,
}
export const DndTable = () => {
  function createData(id, text, code, population, size) {
  return { id, text, code, population, size};
}

const dataRows = [
  createData(1,'India', 'IN', 1324171354, 3287263),
  createData(2,'China', 'CN', 1403500365, 9596961),
  createData(3,'Italy', 'IT', 60483973, 301340),
  createData(4,'United States', 'US', 327167434, 9833520),
  createData(5,'Canada', 'CA', 37602103, 9984670),
  createData(6,'Australia', 'AU', 25475400, 7692024),
  createData(7,'Germany', 'DE', 83019200, 357578),
  createData(8,'Ireland', 'IE', 4857000, 70273),
  createData(9,'Mexico', 'MX', 126577691, 1972550),
  createData(10,'Japan', 'JP', 126317000, 377973),
  createData(11,'France', 'FR', 67022000, 640679),
  createData(12,'United Kingdom', 'GB', 67545757, 242495),
  createData(13,'Russia', 'RU', 146793744, 17098246),
  createData(14,'Nigeria', 'NG', 200962417, 923768),
  createData(15,'Brazil', 'BR', 210147125, 8515767),
];
  {
    const [rows, setRows] = useState(dataRows)
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
          text={row.text}
          code={row.code}
          population={row.population}
          size={row.size}
          density={row.density}
          moveRow={moveRow}
        />
      )
    }, [])
    return (
      <>
        <div style={style}>{rows.map((row, i) => renderRow(row, i))}</div>
      </>
    )
  }
}
