import { Link, useParams } from "react-router";
import { Drone, LRT, Street, Trains, Jeep, comeback } from "../assets/images/allImages";

const blogPosts = {
  "cubao-comeback": {
    title: "Cubao: The Comeback Kid of Quezon City",
    image: comeback,
    excerpt:
      "For decades, Cubao has stood as one of the most recognizable names in Metro Manila’s commercial landscape. Long before Bonifacio Global City (BGC) rose from military barracks and before Ortigas Center reached skyward, Cubao was already a thriving heart of business and culture in Quezon City. Once known for the Araneta Coliseum, the bustling Farmers Market, and the iconic Ali Mall, Cubaos streets tell the story of the citys evolution—from mid-century commerce to modern urban reinvention. Today, as developers and investors look for business districts with both character and connectivity, Cubao is quietly reclaiming its place as a premier destination outside of Makati, BGC, and Pasig. Its combination of centrality, affordability, transport access, and creative energy positions it as a commercial zone poised for resurgence.",
  },
  "future-cubao-modernization": {
    title: "The Future of Cubao: Modernization and Revival",
    image: LRT,
    excerpt:
      "Cubao’s resurgence is not about competing head-to-head with the glitzy skyscrapers of BGC or the corporate towers of Makati. It’s about embracing its own identity—a district that blends legacy with innovation, grit with growth, and accessibility with ambition. The next few years will likely see more mixed-use projects, green buildings, and digital infrastructure upgrades. Small property owners are also renovating decades-old buildings into boutique offices, hostels, and coworking hubs. As urban revitalization spreads, Cubao’s position as Quezon City’s primary commercial district will only grow stronger. For investors, entrepreneurs, and residents alike, Cubao represents more than just a place of business—it’s a living, evolving city within a city. It’s where Manila’s past meets its future.",
  },
  "affordability-opportunity": {
    title: "Affordability and Opportunity",
    image: Street,
    excerpt:
      "Compared to Makati, BGC, or even Ortigas, Cubao remains remarkably affordable—for both tenants and investors. Office lease rates and commercial rents are generally 30–50% lower, while foot traffic remains high due to its transport connections and surrounding residential population. This affordability makes Cubao particularly attractive to small and medium enterprises (SMEs), creative startups, and tech-enabled businesses looking for central addresses without premium-district costs. Coworking spaces and shared offices have multiplied, catering to freelancers, digital agencies, and call center operations. Even property ownership in Cubao remains accessible relative to southern business districts. For entrepreneurs with long-term vision, upgrading older properties or converting them into hybrid commercial-office developments offers strong potential for capital appreciation—especially as Quezon City continues to expand its business-friendly policies",
  },
  "future-of-cubao": {
    title: "The Future of Cubao",
    image: Trains,
    excerpt: "Infrastructure access and commercial momentum make Cubao a location with long-term business upside.",
  },
  "new-face-cubao": {
    title: "The New Face of Cubao: Modernization and Revival",
    image: Jeep,
    excerpt:
      "In the past decade, Cubao has seen a wave of redevelopment under the Araneta Group and other property owners. The rebranded Araneta City now blends heritage and modernity, integrating new mixed-use towers with its classic landmarks. Gateway Mall 2, a world-class expansion of the original Gateway complex, brings upscale retail, dining, and entertainment to the district. Around it, modern office buildings such as Cyberpark Tower 1 and 2 host a growing number of BPOs, digital startups, and multinational tenants who appreciate the area’s balance of convenience and cost-efficiency. Residential towers, serviced apartments, and new hotels are rising nearby, creating a 24/7 environment similar to what made Makati and BGC thrive. Still, Cubao retains its distinct character. It isn’t sterile or overdesigned; instead, it offers an authentic urban experience—one where modern glass towers stand beside mid-century buildings, local eateries coexist with branded restaurants, and commuters blend seamlessly with office workers and shoppers.",
  },
  "sustainability-infrastructure": {
    title: "Sustainability and Infrastructure Outlook",
    image: Drone,
    excerpt:
      "Quezon City’s government has also taken steps to make Cubao more sustainable and livable. Infrastructure plans include improved pedestrian pathways, better drainage systems, and smart-city integrations. Araneta City itself has introduced green initiatives—solar panels, waste management systems, and green open spaces like the Times Square Park. Future connectivity projects, such as the upcoming Metro Manila Subway and potential intermodal transport terminals, promise to make Cubao even more accessible. As public transportation evolves, Cubao’s central location will continue to strengthen its role as the city’s mobility core.cture upgrades support sustained growth for tenants and enterprises.",
  },
} as const;

export default function BlogPage() {
  const { id } = useParams();
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
