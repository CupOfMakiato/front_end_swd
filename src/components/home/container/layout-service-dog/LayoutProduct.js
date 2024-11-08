import React, { useEffect, useState } from "react";
import "./LayoutProduct.css";
import { fakeData } from "../../../../fakeData";
import { CardHome } from "../../../../custom/cardItem/CardItem";
import { Link } from "react-router-dom";
import urlApi from "../../../../api/configApi";
import axios from "axios";
import { getListServices } from "../../../../api/testApi";

export default function LayoutProduct() {
  const [itemDog, setItemDog] = useState("");

  useEffect(() => {
    const data = async () => {
      try {
        const response = await getListServices();
        setItemDog(response.data);
        console.log(response.data.item);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    data();
  }, []);

  return (
    <div className="layout-product">
      <div className="title-product">
        <Link to={`/page-dog`}>
          <h2>Service for dogs</h2>
        </Link>
      </div>
      <div className="items-product">
        {fakeData.slice(0, 10).map((item, index) => (
          <Link to={`/detail/${item.id}`}>
            <CardHome key={index} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
