import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Input, Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function SearchAlbum() {
  const { Search } = Input;
  const [albumSearch, setAlbumSearch] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  let url = `https://api.deezer.com/search/album?q=${search}`;
  console.log(url);

  useEffect(() => {
    console.log("useEffect called");
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAlbumSearch(data);
      });
  }, [count]);

  console.log(albumSearch);

  return (
    <div>
      <div>
        <Input
          style={{
            inlineSize: "250px",
            marginBottom: "50px",
          }}
          placeholder="Search an Album"
          onChange={(e) => setSearch(e.target.value)}
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
