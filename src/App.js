import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import "./stil.css"
const data = [
  "Uzbekistan",
  "Tadjikistan",
  "Qazakhstan",
  "Qirgiziston",
  "Russia",
  "Germany",
  "USA",
  "BRITAIN",
  "France",
  "China",
  "Korea",
  "Indonesia",
  "Malayzia",
  "Africa",
  "Japanese",
  "Brazil",
  "Canada",
  "Iraq",
  "Austria",
  "Turkey",
  "Urugvay",
  "Vietnam",
  "Italy",
  "Australia",
  "Spain",
  "Portugal"
];

export default function App() {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 4;

  useEffect(() => {
    setFilterData(
      data.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page]);

  return (
    <div className="App">
      <ul>
        {filterData && filterData.map((item, index) => <li>Country : {item}</li>)}
      </ul>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={(event) => setPage(event.selected)}
        breakLabel="..."
        pageCount={Math.ceil(data.length / n)}
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillLeftCircle />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle />
          </IconContext.Provider>
        }
      />
    </div>
  );
}
