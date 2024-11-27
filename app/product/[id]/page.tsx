export default async function product({params}: {params: {id: string} }) {
    console.log("This is an example of the dynamic Routing.")
    
    const {id} = await params;
    return <h1>product: {id}</h1>
}