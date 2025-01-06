export default async function ProductDetails({
	params,
}: {
	params: { productId: string };
}) {
	const { productId } = await params;
	return <div>Details about product {productId}</div>;
}
