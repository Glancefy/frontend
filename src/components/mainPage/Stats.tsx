function Stats() {
  // make stats card float with user scrolling after a certain point
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg lg:w-1/4
      lg:sticky lg:top-4 lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)]
      md:w-2/5 md:sticky md:top-4 md:overflow-y-auto md:max-h-[calc(100vh-4rem)]"
    >
      <h2 className="text-lg font-semibold">Stats</h2>
      <p className="text-sm">Total Posts: 100</p>
      <p className="text-sm">Total Views: 1000</p>
      <p className="text-sm">Total Comments: 100</p>
    </div>
  );
}

export default Stats;
