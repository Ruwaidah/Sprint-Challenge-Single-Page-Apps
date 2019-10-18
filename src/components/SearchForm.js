import React from "react";

export default function SearchForm(props) {
  const onValueChange = (event) => {
    props.searchword(event.target.value)
  }
 
  return (
    <section className="search-form">
      <form>
        <label>Search 
          <input type = "text" name = "text" placeholder = "search ... " onChange ={ onValueChange }/>
        </label>
      </form>
    </section>
  );
}
