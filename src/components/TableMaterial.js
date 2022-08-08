import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles(() => ({
  head: {
    color: "white",
    background: "black",
    textAlign: "center",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function TableMaterial(props) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Producto/Usuario</StyledTableCell>
            <StyledTableCell>Fecha de Registro/venta</StyledTableCell>
            <StyledTableCell>Email/Foto </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((elemento) => (
            <TableRow key={elemento.id}>
              <TableCell>
                <img src={elemento.imagen} width="35px" height="25px" />
                {"  "}

                {elemento.Producto}
              </TableCell>
              <TableCell align="center">{elemento.fecha}</TableCell>
              <TableCell align="center">{elemento.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableMaterial;
