import { Link } from 'react-router-dom';

const ProductCard1 = (props) => {
  return (
    // <Link to={`/productdetails/${props.id}`} state={{ product: props }} className="block">
    <Link to={`/products/${props.id}`} state={{ product: props }} className="block">

      <div>
        {/* Image Section */}
        <div className="w-full rounded-md bg-[#f4f8f9] overflow-hidden">
          <img
            src={props.image}
            alt={props.name || "Product image"}
            className="w-full h-auto aspect-[4/3] md:aspect-[16/9] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-stretch w-full text-center mt-4">
          {/* First Row: Product Name */}
          <h2 className="text-lg md:text-xl font-semibold text-left">{props.name}</h2>

          {/* Second Row: Price and Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
            <p className="text-md md:text-lg text-gray-600">Rs.{props.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard1;
