export default function Button({ label }) {
  return (
    <p
      className={`${label === 0 && "col-span-2 w-[200px]"} ${["+", "×", "=", "-", "÷"].includes(label) ? "bg-[#f38636] text-white" : "bg-[#dbdbdb]"} flex size-[100px] border-collapse items-center justify-center border-b border-l border-gray-400 text-3xl`}
    >
      {label}
    </p>
  );
}
