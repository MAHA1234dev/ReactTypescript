import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props: { row: any }) {

    const { row } = props;
    const [open, setOpen] = useState(false);

    const onRowClick = (row: any) => {
        setOpen(!open);
    }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                {
                    columns.map((val, i) => {
                        return (
                            <TableCell align="left" key={i} style={{ padding: "7px" }}>
                                {val.field === "icon" &&
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => onRowClick(row)}
                                    >
                                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>}
                                {row[val?.field]}
                            </TableCell>
                        )
                    })
                }
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow: { date: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined; customerId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => (
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const columns = [
    {
        header: "",
        field: "icon",
    },
    {
        header: "Dessert (100g serving)",
        field: "name"
    },
    {
        header: "Calories",
        field: "calories"
    },
    {
        header: "Fat",
        field: "fat"
    },
    {
        header: "Carbs",
        field: "carbs"
    },
    {
        header: "Protein",
        field: "protein"
    },
    {
        header: "Price",
        field: "price"
    },
]

function Contact() {

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
        createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
        createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
    ];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map((val, i) => {
                                return (
                                    <TableCell align="left" style={{ padding: "7px" }}>{val?.header}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact;