import React from "react";
import Item from "./Item";


class ListItems extends React.Component {
  render() {
    return (
      <div className='container'>
        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"AirPods Pro"}
          price={"249"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"Nintendo Switch"}
          price={"299"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"PS5"}
          price={"499"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"Xbox Series X"}
          price={"499"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"Iphone 14 Pro Max - 1TB"}
          price={"1,599"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"Samsung S22 Ultra - 1TB"}
          price={"1,399"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"MacBook Pro 14' M1 Max (64GB RAM | 4TB)"}
          price={"4,699"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"2022 Mac Studio M1 Ultra (128GB RAM | 8TB)"}
          price={"6,999"}
        />


        <Item
          img={"https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2019_08_13/iphone2019.jpg"}
          name={"Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)"}
          price={"4,950"}
        />
      </div>
    );
  }
}
export default ListItems;
