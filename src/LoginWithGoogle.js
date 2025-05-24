// src/LoginWithGoogle.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export default function LoginWithGoogle() {
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`${user.displayName}님 환영합니다!`);
      console.log("로그인 정보:", user);
    } catch (error) {
      alert("로그인 실패: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={loginWithGoogle}>구글 아이디로 로그인</button>
    </div>
  );
}
