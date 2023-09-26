import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  getCardsFromLocal,
  saveCardsInLocal,
} from "../../Utitlities/Localstorage";

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
    const savedCard = getCardsFromLocal();
    if (savedCard.includes(id)) {
      return swal("Oops!", "Already Selected This item!", "error");
    } else {
      swal("Appreciated!", `You've Donated $${price} Successfully!`, "success");
      saveCardsInLocal(id);
    }
  };
  return (
    <>
      <div className="px-5 md:px-10 lg:px-32">
        <div className="bg-cover bg-center bg-no-repeat relative">
          <img
            style={{ width: "-webkit-fill-available" }}
            className="h-[250px] md:h-[350px] lg:h-[600px] rounded-xl absolute"
            src={details_img}
            alt=""
          />
          <button
            onClick={handleDonate}
            className="btn text-white absolute top-[190px] md:top-[17rem] lg:top-[33rem] left-[2rem] z-10 hover:outline-none border-0 rounded-md"
            style={{ backgroundColor: `${text_color}` }}
          >
            Donate ${price}
          </button>

          <div
            style={{ width: "-webkit-fill-available" }}
            className="absolute h-[72px] md:h-[100px] bg-[#0b0b0bcc] opacity-70 top-[178px] md:top-[15.6rem] lg:top-[31.2rem] rounded-b-xl"
          ></div>
        </div>

        <div className="w-full px-5 relative top-[18rem] md:top-[25rem] lg:top-[40rem]">
          <h1 className="text-4xl font-bold text-[##0B0B0B]">{category}</h1>
          <p className="text-sm md:text-base text-justify text-[#515151] pt-6 pb-10">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
