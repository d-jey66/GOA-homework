import ProductCard from "@/components/ProductCard";
async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/products`, { cache: "no-store" })
  return res.json();
}
export default async function Page() {
  const { data } = await getProducts();
  return (
    <div className="space-y-12">
      <section className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-bold">Apple</h1>
        <p className="text-neutral-300">
          Design-forward mock showcase built with Next.js and shadcn/ui
        </p>
      </section>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </section>
    </div>
  );
}
