export interface Iuser{
    name: string,
    email: string
}
export async function apiCall(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json: Iuser[] = await response.json();
    return json.map(x => ({name:x.name, email:x.email}));
}