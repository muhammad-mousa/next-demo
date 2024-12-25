type tParams = Promise<{ slug: string[] }>;

export default async function Challenge(props: { params: tParams }) {
    const { slug } = await props.params;
    const productID = slug[1];
    return (
        <div>
            <h1>Product ID: {productID}</h1>
        </div>
    );
}