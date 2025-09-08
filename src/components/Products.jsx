
import { FaStar } from "react-icons/fa";


const Products = () => {
  return (
    <section className="py-12 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-100">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium">Top Selling Products for you</p>
        <h2 className="text-3xl font-bold text-gray-900">Products</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
          <div  className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md ">
            <img
              src="/shirt.png"
              alt="Blue shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Blue shirt</h3>
            <p className="text-gray-500">Blue</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-700">5</span>
            </div>
          </div>
          <div  className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md ">
            <img
              src="/women2.jpg"
              alt="Women Western"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Women Western</h3>
            <p className="text-gray-500">Red</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-700">4.5</span>
            </div>
          </div>
          <div  className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md ">
            <img
              src="/shirt2.png"
              alt="Blue & White Shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Blue & White Shirt</h3>
            <p className="text-gray-500">Blue & White</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-700">4.7</span>
            </div>
          </div>
          <div  className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md ">
            <img
              src="/women4.jpg"
              alt="Printed T-Shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Printed T-Shirt</h3>
            <p className="text-gray-500">Yellow</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-700">4.4</span>
            </div>
          </div>
          <div  className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md ">
            <img
              src="/shirt3.png"
              alt="White shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">White shirt</h3>
            <p className="text-gray-500">White</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-700">4.5</span>
            </div>
          </div>
     
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          View All Button
        </button>
      </div>
    </section>
  );
};

export default Products;
