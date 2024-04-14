import {useEffect, useState} from 'react';
import { hostname } from './utils/baseURL';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function Books(){
    const [books,setBooks] = useState(null);

    const getBooks = async () => {
        await fetch(`${hostname}/books`).then(res=>res.json())
        .then(res=>{
            setBooks(res.books)
        })
    }
    useEffect(()=>{
        getBooks();
    }, [])

    return (
    <>
      <h1>Books</h1>
      {books && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Available Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.ISBN}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.ISBN}</TableCell>
                <TableCell>{book.available_quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}