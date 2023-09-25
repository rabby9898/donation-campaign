import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CategoryDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const idInt = parseInt(id);
  const cards = useLoaderData();

  useEffect(() => {
    const selectedCards = cards?.find((card) => card.id === idInt);
    setDetails(selectedCards);
  }, [cards, idInt]);

  const { details_img, category, text_color, description, price } = details;

  const handleDonate = () => {
    swal("Appreciated!", `You've Donated ${price} Successfully!`, "success");
  };
  return (
    <>
      <div className="px-5 md:px-10 lg:px-32">
        <div className="h-full absolute bg-cover bg-center bg-no-repeat">
          <img
            className="w-[1280px] h-[75vh] rounded-xl"
            src={details_img}
            alt=""
          />
          <button
            onClick={handleDonate}
            className="btn px-10 py-4 text-white absolute top-[505px] left-[3rem] z-10 hover:outline-none border-0 rounded-md"
            style={{ backgroundColor: `${text_color}` }}
          >
            Donate ${price}
          </button>
          <div className="absolute w-[1280px] h-[100px] bg-[#0b0b0bcc] opacity-70 top-[477px] rounded-b-xl"></div>
        </div>
        <div className="relative top-[40rem]">
          <h1 className="text-4xl font-bold text-[##0B0B0B]">{category}</h1>
          <p className="text-base justify text-[#515151] pt-6 pb-10">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
