import { redirect } from "next/navigation";
export default function Home(){
    return <>
  <section className="flex flex-col justify-center items-center text-center px-6 py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-red-500">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">TANN TRIM</h1>
    <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl">
      Welcome to the Future of Style. Your destination for premium fashion and timeless elegance.
    </p>
    <p className="text-md sm:text-lg lg:text-xl max-w-2xl">
      Explore curated collections designed to inspire confidence and redefine your wardrobe.
    </p>
  </section>

  <section className="px-6 py-16 lg:py-32 bg-amber-300 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Discover Our Collections</h2>
    <p className="text-lg sm:text-xl max-w-3xl mx-auto">
      From classNameic essentials to bold statement pieces, explore styles that suit every occasion. 
      Every item is crafted with precision and care to bring out the best in you.
    </p>
  </section>

  <section className="px-6 py-16 lg:py-32 bg-blue-200 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose Us</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Quality First</h3>
        <p>Every product meets the highest standards of craftsmanship.</p>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Sustainable Fashion</h3>
        <p>Our collections are eco-friendly and responsibly sourced.</p>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Tailored for You</h3>
        <p>Styles and designs that adapt to your lifestyle.</p>
      </div>
    </div>
  </section>

  <section className="px-6 py-16 lg:py-32 bg-green-200 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the TANN TRIM Experience</h2>
    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-4">
      Step into a world where style meets comfort. Be the first to know about our latest releases, exclusive offers, and style guides.
    </p>
    <p className="text-md sm:text-lg lg:text-xl font-semibold">
      Your journey to timeless style starts here.
    </p>
  </section>
    </>;
}