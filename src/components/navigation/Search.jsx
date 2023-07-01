import React from "react";
import { FaSearch } from "react-icons/fa";
import { MyDataContext } from "../../context/DataContext";


const Search = () => {
  const { search, setSearch } = MyDataContext();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex border-0">
    <div className="xl:w-96">
      <div className="flex items-center w-full flex-wrap rounded-2xl bg-success p-2" id="search-field">
        <FaSearch
          className="text-xl text-info bg-success rounded cursor-pointer mx-2"
          title="left button"
        />
        <div>
          <input
            type="search"
            className="focus:border-0 outline-none bg-success"
            placeholder="keresés"
            aria-label="keresés"
            aria-describedby="search-field"
            value={search}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  </div>

  );
}
export default Search;


/*
  <div className="flex border-0">
      <div className="xl:w-96">
        <div className="flex items-center w-full flex-wrap rounded-2xl bg-success p-2" id="search-field">
          <FaSearch
            className="text-xl text-info bg-success rounded cursor-pointer mx-2"
            title="left button"
          />
          <div>
            <input
              type="search"
              className="focus:border-0 outline-none bg-success"
              placeholder="keresés"
              aria-label="keresés"
              aria-describedby="search-field"
              value={search}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>

*/

/*
import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div class="flex  p-0 my-2 h-20 ">
      <div class="mb-3 xl:w-96">
        <div
          class="relative mb-4 flex w-full flex-wrap items-stretch  border border-solid border-neutral-300 rounded-2xl bg-success p-1"
          id="search-field"
        >
          <FaSearch
            className=" text-xl text-info bg-success rounded cursor-pointer mx-2"
            title="left button"
          />
          <input
            type="search"
            className="focus:border-0 outline-none  bg-success"
            placeholder="keresés"
            aria-label="keresés"
            aria-describedby="search-field"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
*/
