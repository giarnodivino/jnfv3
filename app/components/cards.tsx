type MapCardProps = {
  title: string;
  subtitle: string;
  src: string;
};

function MapCard({title, subtitle, src}: MapCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Text */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>

      {/* Map */}
      <div className="h-75 w-full">
        <iframe
          src={src}
          className="h-full w-full"
          style={{border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

type ACcards = {
  title: string;
  subtitle: string;
};

function ACcard({title, subtitle}: ACcards) {
  return (
    <>
      <div className="mx-auto h-full w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">{title}</h3>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed text-center">{subtitle}</p>
      </div>

      <div className="mx-auto h-full w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Contact Information</h3>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed text-center">
          <strong>Phone:</strong> +63 917 530 7337
          <br />
          <strong>Email:</strong> info@jnfdivino.com
        </p>
      </div>
    </>
  );
}

export {MapCard, ACcard};
