import { Link } from "react-router-dom";

const DonationItem = ({ cardItem }) => {
  const { id, image, title, category, card_bg, text_color, button_bg, price } =
    cardItem;
  const fixed = price.toFixed(2);
  return (
    <div>
      <div
        style={{ backgroundColor: `${card_bg}` }}
        className="relative flex w-full max-w-[48rem] h-[350px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="px-5 py-12 flex flex-col justify-between">
          <div
            className="w-fit  rounded-md mb-4"
            style={{ backgroundColor: `${button_bg}` }}
          >
            <h6
              className="px-5 py-2 block text-sm font-medium"
              style={{ color: `${text_color}` }}
            >
              {category}
            </h6>
          </div>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p
            style={{ color: `${text_color}` }}
            className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
          >
            $ {fixed}
          </p>
          <Link to={`/category-details/${id}`}>
            <button
              className=" btn flex select-none items-center gap-2 rounded-lg py-0 md:py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white "
              style={{ backgroundColor: `${text_color}` }}
              type="button"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationItem;
