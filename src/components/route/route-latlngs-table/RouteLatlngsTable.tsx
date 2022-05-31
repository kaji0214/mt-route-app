import React from 'react'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { RouteLatlngsTableFragment } from '@/graphql/generated/client'

export type RouteLatlngsTableProps = {
  data: RouteLatlngsTableFragment
}
const RouteLatlngsTable = ({ data }: RouteLatlngsTableProps) => {
  const { latlngs } = data
  return (
    <TableContainer component={Paper} className={'responsive-table container'}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Lat</TableCell>
            <TableCell align='center'>Lng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {latlngs.map((pos, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='center'>{pos.lat}</TableCell>
              <TableCell align='center'>{pos.lng}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default RouteLatlngsTable
