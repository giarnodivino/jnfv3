import {Link, useParams} from "react-router";
import {Drone, LRT, Street, Trains, Jeep, comeback} from "../assets/images/allImages";

const blogPosts = {
  "cubao-comeback": {
    title: "Cubao: The Comeback Kid of Quezon City",
    image: comeback,
    excerpt:
      "Cubao's strategic location and transit links continue to position it as a high-potential business district.",
  },
  "future-cubao-modernization": {
    title: "The Future of Cubao: Modernization and Revival",
    image: LRT,
    excerpt:
      "Ongoing redevelopment is reshaping Cubao into a stronger hub for retail, offices, and mixed-use activity.",
  },
  "affordability-opportunity": {
    title: "Affordability and Opportunity",
    image: Street,
    excerpt: "Competitive lease rates and strong foot traffic create practical opportunities for growing businesses.",
  },
  "future-of-cubao": {
    title: "The Future of Cubao",
    image: Trains,
    excerpt: "Infrastructure access and commercial momentum make Cubao a location with long-term business upside.",
  },
  "new-face-cubao": {
    title: "The New Face of Cubao: Modernization and Revival",
    image: Jeep,
    excerpt: "Urban improvements and private investments are driving the district's evolving commercial identity.",
  },
  "sustainability-infrastructure": {
    title: "Sustainability and Infrastructure Outlook",
    image: Drone,
    excerpt: "Future-ready planning and infrastructure upgrades support sustained growth for tenants and enterprises.",
  },
} as const;

export default function BlogPage() {
  const {id} = useParams();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : undefined;

  if (!post) {
    return (
      <section className="mx-auto min-h-screen max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Blog not found</h1>
        <p className="mt-4 text-gray-600">The blog you requested does not exist.</p>
        <Link to="/" className="mt-6 inline-block text-blue-600 hover:text-blue-700">
          ← Back to Home
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto min-h-screen max-w-3xl px-4 py-12">
      <Link to="/#blogs" className="inline-block text-blue-600 hover:text-blue-700">
        ← Back to Home
      </Link>

      <img src={post.image} alt={post.title} className="mt-6 h-72 w-full rounded-2xl object-cover" />

      <h1 className="mt-8 text-4xl font-bold text-gray-900">{post.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-gray-700">{post.excerpt}</p>
    </article>
  );
}
