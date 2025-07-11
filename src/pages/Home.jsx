import React from "react";
import CakeCard from "../components/CakeCard";
import cakes from "../data/cakes.json";

const Home = () => {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-cream flex justify-center items-center pb-8 mt-0">
      <img
        src="/images/hero_banner1.png"
        alt="SweetSpot Banner"
        className="w-full max-w-5xl object-contain"
      />
    </section>

      {/* Cakes Section */}
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-caramel mb-10">
          Explore Flavours
        </h1>

        {cakes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        ) : (
          <p className="text-center text-mocha">
            No cakes available at the moment.
          </p>
        )}
      </section>
    </main>
  );
};

export default Home;
