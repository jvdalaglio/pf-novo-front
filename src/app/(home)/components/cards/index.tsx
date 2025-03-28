import { Badge } from "@/components/ui/badge";
import { IProdutos } from "@/types/products/productsResponse";
import { HopOff, LeafyGreen } from "lucide-react";

export default function Cards({ products }: { products: IProdutos[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md sm:p-4 flex justify-between"
        >
        <div className="w-full p-2">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-2 max-[320px]:text-lg">{product.name}</h2>
            <div className="h-full">
              {product.isVegan === 1 && (
                <Badge variant="outline" className="bg-red-400 max-[320px]:p-1 p-2 m-0.5 rounded-full"><LeafyGreen color="white"/></Badge>
              )}
              {
                product.isGlutenFree === 1 && (
                  <Badge variant="outline" className="bg-red-400 max-[320px]:p-1 p-2 m-0.5 rounded-full"><HopOff color="white"/></Badge>
                )
              }
          </div>
          </div>
          <p className="text-gray-600 truncate">{product.description}</p>
          <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
        </div>
        <div>

        </div>
        </div>
      ))}
    </div>
  );
}