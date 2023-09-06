import React, { useState } from "react";
import "./App.css";
import { productData } from "./data"; // Import the data from the data.js file
import Pagination from "./Pagination"; // Import the Pagination component
import "./Pagination.css"; // Import the pagination styles

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage + 1;
  const currentItems = productData.slice(indexOfFirstItem - 1, indexOfLastItem); // Adjust the slice

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1>Transctions Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.category}</td>
              <td>{item.sold ? "Yes" : "No"}</td>
              <td>
                <img src={item.image} alt={item.title} width="50" height="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={productData.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
