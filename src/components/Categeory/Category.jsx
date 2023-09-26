import { Link } from "react-router-dom";

const Category = ({ categoryInfo }) => {
  const { id, image, title, category, card_bg, text_color, button_bg } =
    categoryInfo;
  return (
    <>
      <Link to={`/donation-details/${id}`}>
        <div
          className="card w-full bg-base-100 shadow-xl"
          style={{ backgroundColor: `${card_bg}` }}
        >
          <figure>
            <img className="w-full" src={image} alt="category-img" />
          </figure>
          <div className="card-body">
            <div
              className="w-fit px-6 py-2 rounded-md"
              style={{ backgroundColor: `${button_bg}` }}
            >
              <h2
                className="text-sm font-medium"
                style={{
                  color: `${text_color}`,
                }}
              >
                {category}
              </h2>
            </div>
            <h2
              style={{
                color: `${text_color}`,
              }}
              className="card-title"
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Category;
