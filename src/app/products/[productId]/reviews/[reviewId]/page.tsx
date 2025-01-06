export default async function ReviewDetail({
	params,
}: {
	params: { productId: string; reviewId: string };
}) {
	const { productId } = await params;
	const { reviewId } = await params;
	return (
		<h1>
			Review {reviewId} for product {productId}
		</h1>
	);
}
