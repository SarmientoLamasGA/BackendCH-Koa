const Router = require("koa-router");

const ProductRepo = require("../repositories/productoRepo");
const productsDB = ProductRepo.getInstance();

const router = new Router({
  prefix: "/productos",
});

const prods = [
  {
    id: 1,
    name: "Lapicera",
    price: 500,
  },
  {
    id: 2,
    name: "Lápiz",
    price: 250,
  },
  {
    id: 3,
    name: "Tijera",
    price: 600,
  },
];

router.get("/", async (ctx) => {
  ctx.body = await productsDB.getAll();
  return await ctx.render("pages/shop.ejs", { data: ctx.body });
});

router.get("/:id", async (ctx) => {
  ctx.body = await productsDB.getById();
});

module.exports = router;
