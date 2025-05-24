import { useEffect } from "react";

export default function LoginWithKakao() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("5d399d6353b212bd1226a9a0d6dbd492");
      console.log("Kakao SDK initialized");
    }
  }, []);

  const handleLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, account_email",
      success: function (authObj) {
        console.log("로그인 성공!", authObj);
        alert("로그인 성공!");
      },
      fail: function (err) {
        console.log("로그인 실패", err);
        alert("로그인 실패");
      }
    });
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <button onClick={handleLogin}>카카오톡으로 로그인</button>
    </div>
  );
}
