import { useUser } from "../context/UserContext";

export default function FormHello() {
  const {  userName, userSecondName, logOut } = useUser();
  return (
    <div>
      
      <p>Hello {userName} {userSecondName}</p>
    
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}