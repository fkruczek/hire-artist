import { Tags, type Tag } from "./tags";

export type ArtistCardProps = {
  id: string;
  name: string;
  videoUrl: string;
  description: string;
  city: string;
  voivodeship: string;
  tags: Tag[];
};

function ArtistCardHeader({
  name,
  tags,
}: Pick<ArtistCardProps, "name" | "tags">) {
  return (
    <div className="my-4 flex w-full gap-2">
      <span className="text-3xl">{name}</span>
      <Tags tags={tags} />
    </div>
  );
}

export function ArtistCard({
  description,
  id,
  name,
  videoUrl,
  city,
  voivodeship,
  tags,
}: ArtistCardProps) {
  return (
    <div className="grid py-6">
      <iframe
        width="100%"
        src={videoUrl + "?controls=0"}
        className="aspect-video"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <ArtistCardHeader name={name} tags={tags} />
      <div className="flex gap-2">
        <span>{city},</span>
        <span>{voivodeship}</span>
      </div>
      <span className="mt-4 text-lg">{description}</span>
    </div>
  );
}
