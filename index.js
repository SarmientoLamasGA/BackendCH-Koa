const Koa = require("koa");
const koaBody = require("koa-body");
const views = require("koa-views");
const render = views(__dirname + "/views", {
  extension: "ejs",
  map: {
    html: "prueba",
  },
});

const app = new Koa();

app.use(koaBody());
app.use(render);

// Rutas
const products = require("./src/routes/productos");

app.use(products.routes());

app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.listen(8080);
