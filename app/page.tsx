export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-5xl
font-bold
tracking-tight"
        >
          Google Sheet Image Generator
        </h1>
        <p className="text-pink-700">
          Generate beautiful patient cards from a Google Sheet.
        </p>
        <input type="text" className="flex-1 bg-zinc-800 rounded-lg p-3" />
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg">
          fetch data
        </button>
      </div>
    </div>
  );
}
