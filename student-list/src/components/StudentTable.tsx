import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { Student } from "../utils/data";
import { TableBody } from '@mui/material';
import { useEffect, useMemo } from 'react';
interface Props {
  students: Student[]



}
 export const StudentTable = ({students}:Props) => {
if (students.length ===5){
  alert ("5 students reached") 
  useEffect (()=>{} ,[students])
}

const StudentwithScholorship = useMemo(()=>{
  return students.map((s)=>{
  let result = false;
  
  for (let i =0; i< 1000000; i++){
    result =Math.random() > 0.5 
}
  return {...s, eligible : result};
});
} ,[] );


  return ( 
  <TableContainer component={Paper} sx={{width : 600}}>
    <Table size ="small" sx={{ border : 2}}>
      <TableHead>
        <TableRow>
          <TableCell>Full Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Class</TableCell>
          <TableCell>Scholorship</TableCell>
          
        </TableRow>
        </TableHead>
        <TableBody>
        
          {students.map((item , index)=>{
            return (
              <tr>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.class}</TableCell>
            <TableCell>{StudentwithScholorship[index]?.eligible ? "✅" : "❌"}</TableCell>
          </tr>
            );
          })}
        </TableBody>
            </Table>
    </TableContainer>
  );
 }