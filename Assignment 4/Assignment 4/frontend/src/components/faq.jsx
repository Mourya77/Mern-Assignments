// components/Faq.jsx
const faq = () => {
    return (
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white p-4 rounded shadow transition-all duration-300 open:shadow-md open:bg-blue-50">
              <summary className="font-semibold cursor-pointer text-left group-open:text-blue-600 transition duration-200">
                What is this website about?
              </summary>
              <div className="mt-2 text-gray-600 transition-all duration-300 group-open:animate-fadeIn">
                This website is a demo product showcase built using React and Tailwind CSS.
              </div>
            </details>
  
            <details className="group bg-white p-4 rounded shadow transition-all duration-300 open:shadow-md open:bg-blue-50">
              <summary className="font-semibold cursor-pointer text-left group-open:text-blue-600 transition duration-200">
                How can I view product details?
              </summary>
              <div className="mt-2 text-gray-600 transition-all duration-300 group-open:animate-fadeIn">
                Click on any product from the homepage to view its details in a floating popup.
              </div>
            </details>
  
            <details className="group bg-white p-4 rounded shadow transition-all duration-300 open:shadow-md open:bg-blue-50">
              <summary className="font-semibold cursor-pointer text-left group-open:text-blue-600 transition duration-200">
                Can I purchase items here?
              </summary>
              <div className="mt-2 text-gray-600 transition-all duration-300 group-open:animate-fadeIn">
                Currently, this is a front-end only demo. No transactions are supported.
              </div>
            </details>
          </div>
        </div>
      </section>
    );
  };
  
  export default faq;
  