import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_MEALS = [
  {
    id: "ts1",
    name: "Tuna Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "bs2",
    name: "Breaded Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "bbb3",
    name: "BBQ Beef Burger",
    description: "American, raw, meaty",
    price: 15.99,
  },
  {
    id: "gmb4",
    name: "Green Mix Bowl",
    description: "Mix of green",
    price: 18.99,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_MEALS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
