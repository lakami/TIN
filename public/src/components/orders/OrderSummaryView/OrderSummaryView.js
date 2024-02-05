import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const OrderSummaryView = ({order}) => {

    return(

        <TableRow
            key={order.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <Button variant="contained" href={"/orders/" + order.id}>
                    {order.id}
                </Button>
            </TableCell>
            <TableCell align="left">{order.email}</TableCell>
            <TableCell align="right">{order.date}</TableCell>
        </TableRow>
    )
}

export default OrderSummaryView;