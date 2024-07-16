export default function ProductCardSkeleton() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center md:justify-around lg:p-10">
      {Array(9)
        .fill("0")
        .map((_, index) => (
          <div
            key={index + "skeleton"}
            className="group relative m-5 aspect-[3/4.5] w-[28%] min-w-[350px] animate-pulse rounded-2xl bg-slate-300 shadow-sm"
          >
            <span className="absolute right-3 top-3 h-6 w-32 animate-pulse rounded-xl bg-slate-400 p-1.5 text-xs"></span>
            <div className="absolute bottom-0 left-0 m-3 h-20 w-[93%] animate-pulse rounded-xl bg-slate-400"></div>
          </div>
        ))}
    </div>
  );
}
