import React from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";

import styles from "./styles/SearchBar.module.scss";

function SearchBar({ options }) {
  const history = useHistory();

  return (
    <div className={styles.search}>
      <Select
        options={options}
        onChange={({ value }) => {
          history.push({ pathname: "/article", state: { test: value } });
        }}
        placeholder="Search Article..."
      />
    </div>
  );
}

export default SearchBar;
