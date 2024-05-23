import React from "react";
import {
  BACK_GROUND,
  COCKTAIL_ONE,
  COCKTAIL_TWO,
  CUP,
  JAR,
  LEFT_BG_IMAGE,
  RECTANGLE_BG,
  RECTANGLE_PLANTS,
  RIGHT_BG_IMAGE,
} from "../../assets";
import Button from "../../components/Button";
import { useGetFilteredItems } from "../../services/service";
import MenuCard from "./components/MenuCard";
import ThreeColumnText from "./components/ThreeColumnText";

function FoodPage() {
  const { drinks, brunchCocktails, error } = useGetFilteredItems();

  const topLengths_drinks = {
    sm: '10px',
    md: '10px',
    lg: '10px',
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative w-full h-[311px]">
          <img
            src={RECTANGLE_PLANTS}
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center h-full">
            <div className="text-center mb-2">
              <h2
                className="text-white font-bold md:text-5xl lg:text-6xl xs:text-[40px]"
                style={{ textShadow: "4px 3px #800020" }}
              >
                MENU
              </h2>
            </div>
            <div className="text-center px-4 md:w-3/4 lg:w-2/3">
              <p
                className="text-gray-400 md:inline md:block"
                style={{ fontFamily: "Kelly Slab, sans-serif" }}
              >
                Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
                <br className="2xl:hidden" />
                place an order, use the "Order Online" button located below the menu.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[79px] overflow-hidden">
          <img
            src={RECTANGLE_BG}
            alt="Background"
            className="w-full object-cover h-full object-center sm:object-left z-10"
          />
          <div className="absolute top-[5px] w-full flex justify-center items-center z-10">
            <Button className="text-white w-[113px] h-[50px] hover:bg-[#0796EF]">
              FOOD
            </Button>
            <Button className="text-white w-[113px] h-[50px] hover:bg-[#0796EF]">
              DRINKS
            </Button>
            <Button className="text-white w-[113px] h-[50px] hover:bg-[#0796EF]">
              BRUNCH
            </Button>
          </div>
        </div>
      </div>
      <div className="pb-[70px] pt-[86px]" style={{ backgroundImage: `url(${BACK_GROUND})` }}>
        <div>
          <div className="relative">
            <img
              src={LEFT_BG_IMAGE}
              alt="Left Background"
              className="absolute top-0 right-[-32px]h-full z-[1] object-cover"
            />
            <img
              src={RIGHT_BG_IMAGE}
              alt="Right Background"
              className="absolute top-0 right-[-32px] h-full z-[1] object-cover"
            />
            <MenuCard image1={JAR} image2={CUP} topLengths={topLengths_drinks} data={drinks} title="DRINKS" />
            <MenuCard brunch_className="lg:top-[352px] md:top-[570px] xs:top-[780px]" image2={COCKTAIL_ONE} image1={COCKTAIL_TWO} data={brunchCocktails} title="BRUNCH COCKTAILS" />
            <div className="flex mb-12 mt-[30px]  justify-center">
            <button
              className="w-40 h-12  rounded border border-gray-300 bg-blue-500"
           
            >
              ORDER ONLINE
            </button>
          </div>
            <ThreeColumnText />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodPage;
