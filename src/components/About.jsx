
const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 lg:px-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold  mb-6">
          About Us
        </h2>

        <p className=" text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Welcome to <span className="font-semibold ">Ecommerce</span>, 
          your one-stop destination for quality products at unbeatable prices. 
          We aim to provide you with a seamless shopping experience by 
          offering curated collections, secure payments, and fast delivery.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-amber-50 rounded-2xl p-6 ">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">Our Mission</h3>
            <p>
              To make online shopping simple, enjoyable, and accessible to everyone by 
              delivering trusted products and outstanding customer service.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-6 ">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">Our Vision</h3>
            <p className="">
              To become a leading global eCommerce brand known for innovation, 
              sustainability, and customer-first values.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-6 ">
            <h3 className="text-xl font-semibold text-amber-700 mb-3">Why Choose Us?</h3>
            <p>
              We provide top-notch products, secure payments, fast delivery, and a 
              hassle-free return policy — ensuring you shop with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
