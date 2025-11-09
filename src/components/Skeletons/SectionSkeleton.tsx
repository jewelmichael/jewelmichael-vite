// components/SectionSkeleton.tsx
export default function SectionSkeleton({ title }: { title: string }) {
  return (
    <section
      aria-busy="true"
      className="flex flex-col gap-3 py-16 px-4 md:px-8 animate-pulse"
    >
      <h2 className="text-xl font-semibold text-gray-400">{title}</h2>
      <div className="h-24 bg-gray-200/50 rounded-xl" />
      <div className="h-24 bg-gray-200/30 rounded-xl" />
    </section>
  );
}
