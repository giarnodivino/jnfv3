import {Drone, LRT} from "../assets/images/allImages";

type blogCardProps = {
    image: string;
    title: string;
}

export default function BlogCard({image, title}: blogCardProps) {
    return (
        <div className="h-full rounded-4xl border border-gray-200 bg-white text-center shadow-sm overflow-hidden flex flex-col">
            <img src={image} className="h-52 w-full object-cover" alt="" />
            <p className="text-lg p-6 flex-1">{title}</p>
        </div>
    )
}