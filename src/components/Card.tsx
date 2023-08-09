type ImageInfo = {
  src: string;
  alt: string;
};

type Props = {
  titulo: any;
  price: any;
  img: ImageInfo;
};

export const Card = (props: Props) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-56 p-4"
          style={{ backgroundImage: `url(${props.img.src})` }}
        ></div>
        <div className="p-4">
          <p className="font-semibold text-gray-600 text-xs uppercase">
            {props.img.alt}
          </p>
          <p className="font-bold text-gray-900 text-lg">{props.titulo}</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">{props.img.alt}</span>
            <span className="px-2 py-1 bg-gray-800 text-xs text-gray-100 font-semibold rounded ml-auto">
              {props.price}
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
