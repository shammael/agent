import React, { useState } from "react";
import useAppStore from "../../store/app.store";
import { SearchIcon } from "../icons";

const Search = () => {
  const [state, setState] = useState("");
  const updateSearch = useAppStore((state) => state.updateSearch);
  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        style={{ height: "30px", border: "none", padding: "0px 10px" }}
        onChange={(e) => updateSearch(e.target.value)}
        placeholder="Search by practice area"
      />
      <button
        style={{
          height: "30px",
          border: "none",
          backgroundColor: "#14b8a6",
          color: "#FFF",
          padding: "10px",
          textTransform: "uppercase",
          fontWeight: "400",
        }}
      >
        <SearchIcon fill="#fff" fontWeight="600" />
      </button>
    </div>
  );
};

export default Search;
