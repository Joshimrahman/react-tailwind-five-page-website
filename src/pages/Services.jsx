const services = [
  {
    title: "Web Development",
    description: "We create modern and responsive websites.",
  },
  {
    title: "Web Design",
    description: "We design beautiful and user-friendly interfaces.",
  },
  {
    title: "Digital Marketing",
    description: "We help businesses grow online.",
  },
];

function Services() {

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition"
          >

            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600">
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;