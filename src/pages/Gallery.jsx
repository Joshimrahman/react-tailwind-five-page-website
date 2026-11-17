const images = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
];

function Gallery() {

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Our Gallery
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {images.map((image, index) => (

          <div key={index} className="overflow-hidden rounded-xl shadow-lg">

            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;