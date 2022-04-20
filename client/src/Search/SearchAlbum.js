import React from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import "../App.css";
import { Input, Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchAlbum({ setCount, setSearch, count, search }) {
  return (
    <div>
      <div>
        <Input
          style={{
            inlineSize: "250px",
            marginBottom: "50px",
          }}
          placeholder="Search an Album or Artist"
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={() => setCount(count + 1)}
        />
        <Tooltip title="search">
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            size="large"
            onClick={() => setCount(count + 1)}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default SearchAlbum;
