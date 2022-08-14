const Router = require("koa-router");

const ProductRepo = require("../repositories/productoRepo");
const productsDB = ProductRepo.getInstance();

const router = new Router({
  prefix: "/productos",
});

router.get("/", async (ctx) => {
  ctx.body = await productsDB.getAll();
  return await ctx.render("pages/shop.ejs", { data: ctx.body });
});

//Cargar Prods
router.get("/cargar-productos", async (ctx) => {
  return ctx.render("pages/loadProducts", {
    data: await productsDB.getAll(),
  });
});

router.post("/cargar-productos", async (ctx) => {
  const newProd = ctx.request.body;
  return await ctx.render("pages/loadProducts", {
    data: await productsDB.getAll(),
    saveData: await productsDB.add(newProd),
  });
});

//Por ID
router.get("/:id?", async (ctx) => {
  const prod = await productsDB.getById(ctx.params.id);
  return (ctx.body = prod);
});

router.put("/:id", async (ctx) => {
  const idExist = await productsDB.getById(ctx.params.id);
  if (idExist) {
    const prod = await productsDB.modify(req.params.id, req.body);
    ctx.body = prod;
  } else {
    ctx.body = "El producto no existe";
  }

  return (ctx.body = idExist);
});

router.delete("/:id", async (ctx) => {
  const idExist = await productsDB.getById(ctx.request);

  if (idExist) {
    const prod = await productsDB.delete(req.params.id, req.body);
    ctx.body = prod;
  } else {
    ctx.body = "El producto no existe";
  }
});

module.exports = router;
