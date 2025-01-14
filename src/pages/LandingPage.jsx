import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Star } from "lucide-react";
import CatalogueSection from "../components/CatalogueSection";
import { useNavigate } from "react-router-dom";
import foods from "../data/FoodData";
import restaurants from "../data/RestaurantData";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [customerReviews, setCustomerReviews] = useState([]);
  const navigate = useNavigate();

  const fetchReviews = async () => {
    const urls = [
      "https://restaurant-api.dicoding.dev/detail/uqzwm2m981kfw1e867",
      "https://restaurant-api.dicoding.dev/detail/dy62fuwe6w8kfw1e867",
      "https://restaurant-api.dicoding.dev/detail/vfsqv0t48jkfw1e867",
      "https://restaurant-api.dicoding.dev/detail/w7jca3irwykfw1e867",
    ];

    const allRequests = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    const allResponses = await Promise.all(allRequests);

    allResponses.forEach((response) => {
      setCustomerReviews((prev) => [...prev, response.restaurant]);
    });
  };
  
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="bg-white pt-[100px]">
      <Navbar />
      <Hero />
      <CatalogueSection />
      <div>
        <div id="main" className="rounded-t-[100px] py-8 bg-[#EDEEF3]">
          <div className="w-[85%] mx-auto flex flex-col gap-9">
            <h1 className="text-4xl font-bold text-center">
              Featured Restaurants
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {restaurants.slice(0, 4).map((restaurant) => (
                <button
                  key={restaurant.idRestaurant}
                  onClick={() => navigate(`/restaurant/${restaurant.idRestaurant}`)}
                  className="border-2 hover:border-primary duration-500 text-start overflow-hidden rounded-lg"
                >
                  <div className="relative group overflow-hidden">
                    <img
                      src={restaurant.restaurantPicture}
                      alt={restaurant.name}
                      className="w-full h-[160px] group-hover:scale-110 duration-500  object-cover rounded-t-lg hover:"
                    />
                    <p className="block absolute bg-primary text-white rounded-full p-2 text-xs font-semibold bottom-3 left-2">
                      {restaurant.city}
                    </p>
                  </div>

                  <div className="p-5 pt-4 bg-white">
                    <div className="flex justify-between  items-center">
                      <a className="text-xl font-bold hover:cursor-pointer hover:underline duration-300">
                        {restaurant.name}
                      </a>
                    </div>
                    <p className="line-clamp-4 text-sm text-tertiary mt-1">
                      {restaurant.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            <a
              href="/catalogue?type=restaurants"
              className="text-lg mx-auto active:translate-y-1 active:scale-90 font-medium duration-300 py-2 px-8 text-white bg-primary rounded-xl w-fit"
            >
              See All Restaurants
            </a>

            <h1 className="text-4xl mt-8 font-bold text-center">
              Featured Foods
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {foods.slice(0, 4).map((food) => (
                <button
                  key={food.idMeal}
                  onClick={() => navigate(`/food/${food.idMeal}`)}
                  className="border-2 hover:border-primary duration-500 text-start overflow-hidden rounded-lg"
                >
                  <div className="relative group overflow-hidden">
                    <img
                      src={food.strMealThumb}
                      alt={food.strMeal}
                      className="w-full h-[160px] group-hover:scale-110 duration-500  object-cover rounded-t-lg hover:"
                    />
                    <p className="block absolute bg-primary text-white rounded-full p-2 text-xs font-semibold bottom-3 left-2">
                      {food.strCategory}
                    </p>
                  </div>

                  <div className="p-5 pt-4 bg-white">
                    <div className="flex justify-between  items-center">
                      <a className="text-xl font-bold hover:cursor-pointer hover:underline duration-300">
                        {food.strMeal}
                      </a>
                    </div>
                    <p className="line-clamp-4 text-sm text-tertiary mt-1">
                      {food.strDescription}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            <a
              href="/catalogue?type=foods"
              className="text-lg mx-auto active:translate-y-1 active:scale-90 font-medium duration-300 py-2 px-8 text-white bg-primary rounded-xl w-fit"
            >
              See All Foods
            </a>
          </div>
        </div>
        <div className="bg-primary">
          <div className="bg-[#EDEEF3] rounded-b-[100px] h-[50px]"></div>
        </div>
        <div className=""></div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
