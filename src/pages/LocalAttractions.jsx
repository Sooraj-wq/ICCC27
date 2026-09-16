import GradientBlob from "../components/GradientBlob";

const attractions = [
  {
    name: "Kovalam",
    link: "https://www.keralatourism.org/destination/kovalam-beach/236",
    image:
      "https://www.keralatourism.org/images/destination/large/kovalam20131031105847_236_1.jpg",
  },
  {
    name: "Varkala",
    link: "https://www.keralatourism.org/varkala",
    image:
      "https://www.keralatourism.org/images/microsites/varkala/inner-banner.jpg",
  },
  {
    name: "Shankhumukham Beach",
    link: "https://www.keralatourism.org/destination/shankhumugham-beach-thiruvananthapuram/224",
    image:
      "https://www.keralatourism.org/images/destination/large/shankhumugham_beach_thiruvananthapuram20131031115511_224_1.jpg",
  },
  {
    name: "Ponmudi",
    link: "https://www.keralatourism.org/destination/ponmudi-hills/243",
    image:
      "https://www.keralatourism.org/images/destination/large/ponmudi_hill_station_thiruvananthapuram20131108135356_243_3.jpg",
  },
  {
    name: "Sree Padmanabhaswamy Temple",
    link: "https://www.keralatourism.org/destination/padmanabha-swamy-temple-thiruvananthapuram/13",
    image:
      "https://www.keralatourism.org/images/destination/large/sree_padmanabhaswamy_temple_thiruvananthapuram20131031115717_13_1.jpg",
  },
  {
    name: "Jatayu Adventure Center",
    link: "https://www.keralatourism.org/destination/jatayupara-chadayamangalam/262",
    image:
      "https://www.keralatourism.org/images/destination/large/jatayu_adventure_centre20180919110817_262_1.jpg",
  },
  {
    name: "Thiruvananthapuram Zoo",
    link: "https://www.keralatourism.org/destination/zoological-park-thiruvananthapuram/90",
    image:
      "https://www.keralatourism.org/images/destination/large/the_zoological_park_thiruvananthapuram20131115172928_90_1.jpg",
  },
  {
    name: "Kuthiramalika Palace",
    link: "https://www.keralatourism.org/destination/kuthiramalika-palace-east-fort/58",
    image:
      "https://www.keralatourism.org/images/destination/large/kuthiramalika_palace_museum_at_east_fort20131031110636_58_1.jpg",
  },
  {
    name: "Napier Museum",
    link: "https://www.keralatourism.org/destination/napier-museum-thiruvananthapuram/327",
    image:
      "https://www.keralatourism.org/images/destination/large/napier_museum_thiruvananthapuram20131115173306_327_1.jpg",
  },
];

export default function LocalAttractions() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Venue
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-gray-900 mt-4">
            Local{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Attractions
            </span>
          </h1>
          <p className="mt-3 text-lg text-black max-w-3xl mx-auto leading-relaxed">
            Trivandrum, officially known as Thiruvananthapuram, is the capital
            of Kerala, India, renowned for its rich cultural heritage and
            historical significance. The city is home to the famous
            Padmanabhaswamy Temple, a symbol of architectural brilliance and
            immense wealth. It houses significant institutions like the Vikram
            Sarabhai Space Centre (VSSC) and Technopark, one of India's largest
            IT hubs. Trivandrum is known for its natural beauty, with attractions
            like Kovalam Beach, Ponmudi hill station, and Neyyar Wildlife
            Sanctuary. The city enjoys a tropical monsoon climate characterised
            by hot, humid weather and heavy monsoon rains. Well-connected by
            Trivandrum International Airport and a robust rail and road network,
            the city is a vibrant blend of tradition and modernity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <a
              key={attraction.name}
              href={attraction.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden border border-gray-200 shadow-lg min-h-[220px] bg-cover bg-center block transition-transform duration-300 hover:scale-[1.02]"
              style={{ backgroundImage: `url('${attraction.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h2 className="font-display text-xl font-bold text-white">
                  {attraction.name}
                </h2>
                <p className="text-sm text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore on Kerala Tourism &rarr;
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}