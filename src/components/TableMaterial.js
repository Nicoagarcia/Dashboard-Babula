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
  const [users1, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  /*console.log(users1);*/
  //console.log(JSON.stringify(users1));
  // console.log(JSON.stringify(users1[users1.length - 1]));
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Producto</StyledTableCell>
            <StyledTableCell>Descripcion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users1.map((elemento) => (
            <TableRow key={elemento.id}>
              <TableCell>
                <TableCell align="center">{elemento.name}</TableCell>
              </TableCell>
              <TableCell align="center">{elemento.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableMaterial;
