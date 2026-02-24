export default function Filters({ search, setSearch, category, setCategory }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-1/2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-1/4"
      >
        <option value="">All Categories</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>
  );
}