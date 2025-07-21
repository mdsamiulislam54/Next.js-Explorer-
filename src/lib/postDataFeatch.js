export const postDataFetch = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();

}
export const postDataFetchWithId = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();

}