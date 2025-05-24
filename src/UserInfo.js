// src/UserInfo.js
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("로그아웃 되었습니다.");
    setUser(null);
  };

  if (!user) return null;

  return (
    <div style={{ marginTop: "1rem", backgroundColor: "#eee", padding: "1rem" }}>
      <p>
        👤 현재 로그인: <strong>{user.displayName || user.email}</strong>
      </p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
