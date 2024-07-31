export default function Display({ display }) {
  return (
    <p className="w-full bg-[#7a7b88] px-3 py-2 text-end text-5xl text-white">
      {display === "" ? 0 : display}
    </p>
  );
}
