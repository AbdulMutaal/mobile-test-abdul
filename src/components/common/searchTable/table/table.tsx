import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Block from '../block/block';
import styles from './table.module.css';

import Switch from '@mui/material/Switch';
// import PendingIcon from '@mui/icons-material/Pending';
import ThreedotsIcon from '../../../../assets/threeDots.svg';
import Pagination from '@mui/material/Pagination';
import BoyAvatar from '../../../../assets/boyAvatar.svg';



const label = { inputProps: { 'aria-label': 'Switch demo' } };


interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'members', minWidth: 370 },
  { id: 'code', label: 'Joined since' },
  {
    id: 'population',
    label: 'Dump Editor',
    // minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Action',
    // minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US'),
  }
];

// interface Data {
//   name: string;
//   code: string;
//   population: number;
//   size: number;
//   density: number;
// }

// function createData(
//   name: string,
//   code: string,
//   population: number,
//   size: number,
// ): Data {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

export default function StickyHeadTable({dataSource}: any) {
  const [page,] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 1000 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow 
                    hover 
                    role="checkbox" 
                    tabIndex={-1} 
                    key={row.id}
                    sx={row.admin ? {
                      background: "linear-gradient(90deg, rgba(255, 62, 154, 0.05) 0.59%, rgba(216, 62, 255, 0.05) 100.59%)"
                    } : {}}
                  >
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "name" && 
                            <div className={styles.column1}>
                                <div>
                                    <Avatar alt="Remy Sharp" src={BoyAvatar} />
                                </div>
                                <div className={styles.emailDiv}>
                                  <div className={styles.column1Text}>
                                      <p className={styles.name}>{row.name}</p>
                                      {row.admin && <Block>administrator</Block>}
                                  </div>
                                  <div>
                                      <p className={styles.email}>darlene.robertson@harvard.ac.uk</p>
                                  </div>
                                </div>
                                
                            </div>}

                            {column.id === "code" && 
                            <div className={styles.column2}>
                                <p>4 May 2022</p>
                            </div>}

                            {column.id === "population" && <Switch color="secondary" {...label} defaultChecked />}

                            {column.id === "size" && 
                              <div className={styles.SizeColumn}>
                                <button onClick={() => window.open("https://google.com",'_blank')} className={styles.profileBtn}>View Profile</button>
                                <img alt="three dots" onClick={() => window.open("https://google.com",'_blank')} src={ThreedotsIcon} />
                              </div>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // shape="rounded"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      

    </Paper>
    <div className={styles.Paginationfooter}>
      <div className={styles.PaginationText}>
        <p>1-{rowsPerPage} from {dataSource.length} Show</p>
        <select className={styles.PaginationSelect} value={rowsPerPage} onChange={(e: any) => setRowsPerPage(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <p>on each load</p>
      </div>
      <div className={styles.PaginationDiv}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
    
    </>
  );
}
