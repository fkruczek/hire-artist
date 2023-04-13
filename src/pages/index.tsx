import { type NextPage } from "next";
import Head from "next/head";
import { ArtistCard, type ArtistCardProps } from "~/components/artist-card";
import { FiltersBox } from "~/components/filters-box";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

const artists: ArtistCardProps[] = [
  {
    id: "1",
    videoUrl: "https://www.youtube.com/embed/pCIcyGuVFnk",
    name: "Bossa Duet",
    description:
      "Crafted from gleaming 14K white gold, this wedding band is a stunning symbol of everlasting love. The band features a timeless design, with a polished finish that catches the light and sparkles with every movement. With its comfortable fit and classic style, this band is perfect for the couple who wants a traditional and elegant wedding band to symbolize their commitment to one another.",
    city: "Warsaw",
    voivodeship: "Mazowieckie",
    tags: [{ color: "#ff0000", id: "1", name: "Jazz" }],
  },
  {
    id: "2",
    videoUrl: "https://www.youtube.com/embed/z7ggtmv3fP4",
    name: "Demeters",
    description:
      "This stunning wedding band is crafted from 18K rose gold and features a vintage-inspired design with intricate filigree detailing. The band is adorned with sparkling diamonds, which add a touch of glamour and luxury to the piece. With its unique and timeless style, this wedding band is perfect for the couple who wants a one-of-a-kind piece of jewelry that reflects their individuality and celebrates their love in a truly special way.",
    city: "Kraków",
    voivodeship: "Małopolskie",
    tags: [
      { color: "#ff0000", id: "1", name: "Jazz" },
      { color: "#00ff00", id: "2", name: "Rock" },
    ],
  },
  {
    id: "3",
    videoUrl: "https://youtube.com/embed/Ru1A7OuLbf4",
    name: "Wedding band",
    description:
      "This exquisite wedding band features a never-ending line of sparkling diamonds, set in lustrous 18K yellow gold. The infinity design represents the boundless love and devotion that the couple shares, while the diamonds symbolize the brilliance and strength of their partnership. This unique and eye-catching wedding band is perfect for the couple who wants a meaningful and personalized piece of jewelry to mark their special day.",
    city: "Nowy Sącz",
    voivodeship: "Małopolskie",
    tags: [],
  },
  {
    id: "1",
    videoUrl: "https://www.youtube.com/embed/pCIcyGuVFnk",
    name: "Bossa Duet",
    description:
      "Crafted from gleaming 14K white gold, this wedding band is a stunning symbol of everlasting love. The band features a timeless design, with a polished finish that catches the light and sparkles with every movement. With its comfortable fit and classic style, this band is perfect for the couple who wants a traditional and elegant wedding band to symbolize their commitment to one another.",
    city: "Warsaw",
    voivodeship: "Mazowieckie",
    tags: [{ color: "#ff0000", id: "1", name: "Jazz" }],
  },
  {
    id: "2",
    videoUrl: "https://www.youtube.com/embed/z7ggtmv3fP4",
    name: "Demeters",
    description:
      "This stunning wedding band is crafted from 18K rose gold and features a vintage-inspired design with intricate filigree detailing. The band is adorned with sparkling diamonds, which add a touch of glamour and luxury to the piece. With its unique and timeless style, this wedding band is perfect for the couple who wants a one-of-a-kind piece of jewelry that reflects their individuality and celebrates their love in a truly special way.",
    city: "Kraków",
    voivodeship: "Małopolskie",
    tags: [
      { color: "#ff0000", id: "1", name: "Jazz" },
      { color: "#00ff00", id: "2", name: "Rock" },
    ],
  },
  {
    id: "3",
    videoUrl: "https://youtube.com/embed/Ru1A7OuLbf4",
    name: "Wedding band",
    description:
      "This exquisite wedding band features a never-ending line of sparkling diamonds, set in lustrous 18K yellow gold. The infinity design represents the boundless love and devotion that the couple shares, while the diamonds symbolize the brilliance and strength of their partnership. This unique and eye-catching wedding band is perfect for the couple who wants a meaningful and personalized piece of jewelry to mark their special day.",
    city: "Nowy Sącz",
    voivodeship: "Małopolskie",
    tags: [],
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hire Artist App</title>
        <meta name="description" content="App for hiring artists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center pt-8">
        <div className="my-10 grid max-w-2xl gap-6">
          <FiltersBox />
          {artists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
