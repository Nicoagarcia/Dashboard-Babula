import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import "fontsource-roboto";
import "../assets/css/Dashboard.css";
import CardsHeader from "../components/CardsHeader";
import Cards from "../components/Cards";
import Graphics from "../components/Graphics";
import TableMaterial from "../components/TableMaterial";
/*const [user, setUsers] = useState("");*/

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  iconos: {
    color: "white",
  },
  container: {
    paddingTop: "40px",
    alignItems: "center",
  },
  containerGrafica: {
    marginTop: "40px",
  },
  containerTabla: {
    marginTop: "40px",
  },
}));

/*const data = () => {
  fetch("http://localhost:4000/api/users/2")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data.user);
    });
};*/

const data = [
  {
    id: 1,
    Producto: "Borsch",
    fecha: "6 de sep. 2020",
    Compras: 32,
    imagen: require("../assets/img/borsch.jpeg"),
  },
  {
    id: 2,
    Producto: "Chebureki",
    fecha: "5 de sep. 2020",
    Compras: 31,
    imagen: require("../assets/img/chebureki.jpeg"),
  },
  {
    id: 3,
    Producto: "Torta de miel",
    fecha: "4 de sep. 2020",
    Compras: 2,
    imagen: require("../assets/img/torta-de-miel.jpeg"),
  },
];

function Dashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            titulo="Babula"
            texto="Comida"
            color="#F8E8DA"
            font="rgba(0, 0, 0)"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            titulo="Comida"
            texto="Rusa"
            color="#F8E8DA"
            font="rgba(0, 0, 0)"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            titulo="Buenos Aires"
            texto="Argentina"
            color="#F8E8DA"
            font="rgba(0, 0, 0)"
          />
        </Grid>

        <Grid
          container
          spacing={1}
          className={classes.container}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Productos" texto="" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Categorias" texto="" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Administradores" texto="" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Usuarios" texto="" />
          </Grid>
        </Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={classes.containerGrafica}
        >
          <Graphics />
        </Grid>

        <Grid item xs={12} className={classes.containerTabla}>
          <TableMaterial data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
