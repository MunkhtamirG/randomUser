export async function getUsers() {
  return await fetch("https://randomuser.me/api");
}
export async function getDataFromUsers() {
  return await fetch("data/data.json");
}
