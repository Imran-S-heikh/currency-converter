const shared = [
  "absolute",
  "w-full",
  "h-full",
  "rounded-full",
  "border-t-transparent",
  "border-l-transparent",
  "border-r-transparent",
  "border-b-current",
].join(" ");

function Spinner({ className, thickness = 2 }) {
  return (
    <div
      className={`
        relative inline-flex flex-col gap-2 items-center justify-center w-8 aspect-square ${className}
      `}
    >
      <i
        className={`${shared} animate-spinner-ease-spin border-solid`}
        style={{ borderWidth: thickness }}
      />
      <i
        className={`
          ${shared} animate-spinner-linear-spin border-dotted opacity-75
        `}
        style={{ borderWidth: thickness }}
      />
    </div>
  );
}

export default Spinner;
