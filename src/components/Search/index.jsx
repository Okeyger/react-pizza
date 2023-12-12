import React from "react";
import debounce from "lodash.debounce";

import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const testik = debounce(() => {
  console.log("Hello");
}, 1000);

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
    testik();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 32 32"
        id="Stock_cut"
        version="1.1"
        viewBox="0 0 32 32"
      >
        <desc />
        <g>
          <path
            d="M21,21L21,21   c1.105-1.105,2.895-1.105,4,0l5.172,5.172c0.53,0.53,0.828,1.25,0.828,2v0C31,29.734,29.734,31,28.172,31h0   c-0.75,0-1.47-0.298-2-0.828L21,25C19.895,23.895,19.895,22.105,21,21z"
            fill="none"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            cx="11"
            cy="11"
            fill="none"
            r="10"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d="M11,5   c-3.314,0-6,2.686-6,6"
            fill="none"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            fill="none"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="18"
            x2="21"
            y1="18"
            y2="21"
          />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => onChangeInput(e)}
        className={styles.input}
        placeholder="Поиск пиццы"
      />
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
