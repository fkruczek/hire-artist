function ArtistTypeSelect() {
  return <div>artist type select</div>;
}

function LocationSelect() {
  return <div>location select</div>;
}

export function FiltersBox() {
  return (
    <div className="bg-fuchsia-100 p-2">
      <LocationSelect />
      <ArtistTypeSelect />
    </div>
  );
}
