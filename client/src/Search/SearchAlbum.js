import React from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import "../App.css";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchAlbum({ setCount, setSearch, count }) {
  return (
    <div>
      <div>
        <Input
          style={{
            inlineSize: "250px",
            marginBottom: "50px",
            borderRadius: "25px",
          }}
          placeholder="Search an Album or Artist"
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={() => setCount(count + 1)}
        />

        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          size="middle"
          onClick={() => setCount(count + 1)}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
}

export default SearchAlbum;
