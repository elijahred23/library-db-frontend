import {useEffect, useState} from 'react';
import { hostname } from './utils/baseURL';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function Users(){
    const [users,setUsers] = useState(null);

    const getUsers = async () => {
        await fetch(`${hostname}/users`).then(res=>res.json())
        .then(res=>{
            setUsers(res.users)
        })
    }
    useEffect(()=>{
        getUsers();
    }, [])

    return (
    <>
      <h1>Users</h1>
      {users && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user,index) => (
              <TableRow key={index}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}