import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    alert(search);
  };
  return (
    <div className="header">
      <h1>React Redux Project</h1>
      <p>
        This project is a simple reduc project that fetches data with search
        functionality
      </p>
      <input
        type="text"
        placeholder="search for a post"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Header;
