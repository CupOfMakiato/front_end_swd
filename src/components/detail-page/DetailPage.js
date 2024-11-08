import React, { useState, useEffect } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import { fakeData } from "../../fakeData";
import MoreService from "./more-services/MoreService";

export default function DetailPage() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);

  useEffect(() => {
    // Tìm item tương ứng với id
    const selectedItem = fakeData.find((item) => item.id === parseInt(id));
    setItemDetail(selectedItem);
  }, [id]);

  if (!itemDetail) {
    return <div>Item not found</div>; // Hiển thị thông báo nếu không tìm thấy item
  }

  return (
    <div className="detail-page">
      <div className="title">Detail Page</div>
      <div className="detail">
        <div className="detail-img">
          <img src={itemDetail.url_Image} alt={itemDetail.name} />
        </div>
        <div className="detail-content">
          <h1 className="name">{itemDetail.name}</h1>
          <div className="price">{itemDetail.price}</div>
          <div className="full-name">Provided by: {itemDetail.full_Name}</div>
          <div className="description">
            $Expertly rendered by Carl Hansen & Søn, the lounge chair—first
            introduced in 1951 and enduring ever since—is available in oak or as
            a combination of oak and walnut, sourced from sustainable forestry.
            Choose from seat and back upholstery in a selection of leather
            options or in a custom fabric.
          </div>
          <div className="detail-buttons">
            <button>Booking now</button>
          </div>
        </div>
      </div>
      <div className="title">Similar services</div>
      <div className="more-services">
        <MoreService />
      </div>
    </div>
  );
}
