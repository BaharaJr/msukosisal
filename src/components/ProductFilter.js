import React from "react";
import { useContext } from "react";
import { ProductContext } from "../Context";
import Title from "../components/Title";

//filter values

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

function ProductFilter({ products }) {
  const context = useContext(ProductContext);
  // eslint-disable-next-line
  const { handleChange, type, price, minPrice, maxPrice } = context;

  //get all unique types
  let types = getUnique(products, "type");

  //add all unique types
  types = ["all", ...types];

  //map items
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="products showcase" />
      <form className="filter-form">
        {/*select product type*/}
        <div className="form-group">
          <label htmlFor="type">product type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end select product type*/}
        <div className="form-group">
          <label htmlFor="price">product price tshs {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
}

export default ProductFilter;
