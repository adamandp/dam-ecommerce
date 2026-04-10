import ProductDescriptionSection from "@/components/products/products-description-section";
import TabsProduct from "@/components/products/products-tabs-section";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="content-container py-c-10 w-full">
      <ProductDescriptionSection slug={slug} />
      <TabsProduct slug={slug} />
      {/* <RelatedProduct /> */}
    </div>
  );
}
