import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function ProductCard({ product }: { product: any }) {
  return (
    <Card className="bg-neutral-900 border-neutral-800">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{product.name}</span>
          <Badge variant="secondary">${product.price}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative h-48 w-full overflow-hidden rounded-xl bg-neutral-800">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-neutral-400">
              No image
            </div>
          )}
        </div>
        <p className="text-sm text-neutral-300">{product.description}</p>
      </CardContent>
    </Card>
  );
}
