import { useState } from "react";
import Button from "../components/Button";

function Home() {

  const [message, setMessage] = useState("");

  return (
    <section className="bg-blue-50 min-h-[600px] flex items-center">

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
          Welcome to Our Website
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          We provide creative solutions and quality services
          to help your business grow.
        </p>

        <Button
          text="Explore More"
          onClick={() => setMessage("Thank you for visiting our website!")}
        />

        {message && (
          <p className="mt-6 text-green-700 font-semibold">
            {message}
          </p>
        )}

      </div>

    </section>
  );
}

export default Home;