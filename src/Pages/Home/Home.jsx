import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const categories = useLoaderData();
  useEffect(() => {
    setFilteredCards(categories);
  }, [categories]);

  const handleSearch = () => {
    const search = searchValue.toLowerCase();
    const filtered = categories.filter(
      (card) => card.category.toLowerCase() === search
    );
    setFilteredCards(filtered);
  };

  return (
    <div>
      <Banner
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      ></Banner>
      <Categories filteredCards={filteredCards}></Categories>
    </div>
  );
};

export default Home;
