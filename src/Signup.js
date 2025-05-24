import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!id || !password) {
      alert("사번과 비밀번호를 모두 입력해주세요.");
      return;
    }
    const email = `${id}@company.com`; // 사번을 이메일로 변환

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("회원가입 성공!");
    } catch (error) {
      alert("회원가입 실패: " + error.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>회원가입</h2>
      <input
        placeholder="사번"
        value={id}
        onChange={(e) => setId(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
}
