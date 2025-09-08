import React from "react";


const Blog = () => {
  return (
    <section id="Blog" className="bg-gray-50 py-16 px-6 lg:px-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Latest <span className="text-amber-600">Blogs</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Stay updated with the latest eCommerce news, shopping tips, and product insights from our team.
        </p>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
            <div className="bg-white rounded-2xl shadow hover:shadow-lg ">
              <img src="/4.jpeg" alt="Top 10 Trending Products in 2025" className="w-full h-48 object-cover"/>
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500">Sept 7, 2025</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                Top 10 Trending Products in 2025
                </h3>
                <p className="text-gray-600 mt-3">Discover the most popular products that customers are loving this year. From fashion to electronics, these are must-haves!</p>
                <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow hover:shadow-lg">
              <img src="/5.jpeg" alt="How to Save Money While Shopping Online" className="w-full h-48 object-cover"/>
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500">Aug 25, 2025</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                How to Save Money While Shopping Online
                </h3>
                <p className="text-gray-600 mt-3">Smart tips and tricks to help you get the best deals and maximize your savings on every purchase.</p>
                <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow hover:shadow-lg ">
              <img src="/6.png" alt="Why Customers Love Fast Delivery" className="w-full h-48 object-cover"/>
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500">Aug 10, 2025</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                Why Customers Love Fast Delivery
                </h3>
                <p className="text-gray-600 mt-3">Speed matters! Learn how fast delivery is changing the eCommerce game and making customers happier than ever.</p>
                <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition">
                  Read More
                </button>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
