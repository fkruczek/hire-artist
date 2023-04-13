export type Tag = {
  id: string;
  name: string;
  color: string;
};

export function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(({ color, id, name }) => (
        <span
          key={id}
          className="rounded-sm p-2"
          style={{ backgroundColor: color }}
        >
          {name}
        </span>
      ))}
    </div>
  );
}
