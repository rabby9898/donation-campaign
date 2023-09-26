import Category from "../Categeory/Category";

const Categories = ({ filteredCards }) => {
  //   console.log(categories);
  return (
    <div className=" relative  top-[33rem] lg:top-[36rem] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 md:py-16 px-5 md:px-10 lg:px-32 gap-5">
        {filteredCards.map((categoryInfo) => (
          <Category
            key={categoryInfo.id}
            categoryInfo={categoryInfo}
          ></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
