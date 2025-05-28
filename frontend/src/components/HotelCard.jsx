import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => window.scrollTo(0, 0)}
      key={room._id}
      className="block rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden max-w-sm mx-auto "
    >
      <div className="relative mb-2">
        <img
          src={room.images[0]}
          alt={`${room.hotel.name} image`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {index % 2 === 0 && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-gray-800 px-2 py-1 rounded-full">
            Best Seller
          </span>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {room.hotel.name}
          </h3>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="rating" className="w-5 h-5" />
            <span className="text-sm text-gray-600">
              {room.rating || "4.5"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={assets.locationIcon}
            alt="location"
            className="w-4 h-4 text-gray-600"
          />
          <span className="text-sm text-gray-600 truncate">
            {room.hotel.address}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-900">
            <span>${room.pricePerNight}</span>
            <span className="text-sm text-gray-500">/night</span>
          </p>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
            Book now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const HotelCard = ({ room, index }) => {
//   return (
//     <Link
//       to={`/rooms/${room._id}`}
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-sm hover:-translate-y-1"
//       aria-label={`View ${room.hotel.name} details`}
//     >
//       <div className="relative h-60 overflow-hidden">
//         <img
//           src={room.images[0]}
//           alt={room.hotel.name}
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//           loading="lazy"
//         />
//         {index % 2 === 0 && (
//           <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold text-gray-900 px-3 py-1 rounded-full shadow-sm">
//             Best Seller
//           </span>
//         )}
//       </div>

//       <div className="p-5 space-y-3">
//         <div className="flex justify-between items-start">
//           <h3
//             className="text-xl font-bold text-gray-900 line-clamp-2"
//             title={room.hotel.name}
//           >
//             {room.hotel.name}
//           </h3>
//           <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full min-w-[70px]">
//             <img src={assets.starIconFilled} alt="Rating" className="w-4 h-4" />
//             <span className="ml-1 text-sm font-medium text-gray-900">
//               {room.rating || "4.5"}
//             </span>
//           </div>
//         </div>

//         <div className="flex items-start gap-2">
//           <img
//             src={assets.locationIcon}
//             alt="Location"
//             className="w-4 h-4 mt-0.5 flex-shrink-0"
//           />
//           <p
//             className="text-gray-600 text-sm line-clamp-2"
//             title={room.hotel.address}
//           >
//             {room.hotel.address}
//           </p>
//         </div>

//         <div className="flex justify-between items-center pt-2">
//           <div>
//             <span className="text-xl font-bold text-gray-900">
//               ${room.pricePerNight}
//             </span>
//             <span className="text-gray-500 text-sm ml-1">/ night</span>
//           </div>
//           <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
//             Book now{" "}
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default HotelCard;
