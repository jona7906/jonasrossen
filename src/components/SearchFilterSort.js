import "../styles/SearchFilterSort.css";
import SearchButton from "../svgs/search_button.svg";
function SearchFilterSort() {
  return (
    <div className="SearchFilterSort">
      <div className="search_wrapper_01">
        <img src={SearchButton} alt="search icon"></img>
        <input class="search_input" placeholder="Search" />
      </div>
      <div className="sort_filter_wrapper_01">
        <div className="sort_wrapper_01">FILTER</div>
        <div className="filter_wrapper_01">SORT</div>
      </div>
    </div>
  );
}

export default SearchFilterSort;
