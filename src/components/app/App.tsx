import SearchPanel from "../search-panel/search-panel";
import Catalog from "../catalog/catalog";
import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <>
      <SearchPanel />
      <Catalog />
    </>
  );
}

export default App;
