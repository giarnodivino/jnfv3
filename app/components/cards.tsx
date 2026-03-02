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

type ChooseUsCardsProps = {
  src1: string;
  src2: string;
  src3: string;
};

function ChooseUsCards({src1, src2, src3}: ChooseUsCardsProps) {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {/* Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
            <img src={src1} className="h-14 w-14 object-contain" alt="Trust" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Trust</h3>
          <p className="mx-auto mt-4 max-w-[28ch] text-base sm:text-lg text-gray-600 leading-relaxed">
            <strong>Reliable partner</strong> for businesses seeking accessible and secure commercial locations in
            <br />
            <span className="whitespace-nowrap">Metro Manila</span>
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
            <img src={src2} className="h-14 w-14 object-contain" alt="Prime Location" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Prime Location</h3>
          <p className="mx-auto mt-4 max-w-[28ch] text-base sm:text-lg text-gray-600 leading-relaxed">
            We ensure your business is <strong>seen, visited, and remembered.</strong>
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
            <img src={src3} className="h-14 w-14 object-contain" alt="Partnerships" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Partnerships</h3>
          <p className="mx-auto mt-4 max-w-[28ch] text-base sm:text-lg text-gray-600 leading-relaxed">
            We take pride in building <strong className="whitespace-nowrap">long-term relationships</strong> <br />
            based on integrity, transparency, and mutual success.
          </p>
        </div>
      </div>
    </>
  );
}

export {MapCard, ACcard, ChooseUsCards};
