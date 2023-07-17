
const { response } = require("express");

const corsNode = (req, res = response, next) => {
  //CONFIGURACION DE HEADERS PARA YA NO USAR LA EXTENCION MOESIF CORS, Y NO DE EL ERROR DE CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-token"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  next();
};

module.exports = {
  corsNode
}
