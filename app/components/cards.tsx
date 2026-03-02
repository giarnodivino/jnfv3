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

export default MapCard;
