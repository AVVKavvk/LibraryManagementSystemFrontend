export const User_Email="access_token";
export const count_User="countUser";
export const UserPassword="UserPassword";
export const UserName="UserName";
export const UserNumber="UserNumber";
export const AdminToken="AdminToken";
export const AdminEmail="AdminEmail";
export const AdminPassword="AdminPassword";
export const IsAdmin="IsAdmin";
export const IsLogged="IsLogged";
export const UserEmail="UserEmail"
export const UserId="UserId"
export const UserMIS="UserMIS"
export const UserSem="UserSem"
export const UserCourse="UserCourse"

export function getItem(key){
    return localStorage.getItem(key);
}
export function setItem(key,value){
    localStorage.setItem(key,value);
}
export function deleteUser(key){
    localStorage.removeItem(key)
}
// export function countUser(key,value){
//     return localStorage.setItem(key,value)
// }
// export function getCountUser(key){
//     return localStorage.getItem(key)
// }