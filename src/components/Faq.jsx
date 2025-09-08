import React from "react";

const Faq = () => {
  return (
    <section id="Faq" className="bg-gray-50 py-16 px-6 lg:px-20 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold ">How do I track my order?</h3>
          <p className=" mt-2">
            Once your order is shipped, you will receive an email with tracking details.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold ">What is your return policy?</h3>
          <p className=" mt-2">
            We offer a 7-day hassle-free return policy for all products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
