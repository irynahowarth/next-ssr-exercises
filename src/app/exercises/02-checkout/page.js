"use client";
import React from "react";

import DATA from "./data";
import reducer from "./reducer";
import StoreItem from "./StoreItem";
import CheckoutFlow from "./CheckoutFlow";
import "./styles.css";
import Spinner from "../../../components/Spinner/Spinner";

function CheckoutExercise() {
  const [items, dispatch] = React.useReducer(reducer, null);

  React.useEffect(() => {
    dispatch({
      type: "initialize-items",
    });
  }, []);

  return (
    <>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem
              key={item.id}
              item={item}
              handleAddToCart={(item) => {
                dispatch({
                  type: "add-item",
                  item,
                });
              }}
            />
          ))}
        </div>
        {!items ? (
          <Spinner />
        ) : (
          <CheckoutFlow
            items={items}
            taxRate={0.15}
            handleDeleteItem={(item) =>
              dispatch({
                type: "delete-item",
                item,
              })
            }
          />
        )}
      </main>
    </>
  );
}

export default CheckoutExercise;
