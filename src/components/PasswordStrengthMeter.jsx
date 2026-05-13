import { useState } from "react";

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState("");

  const calculateStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = calculateStrength(password);

  const getStrengthLabel = () => {
    if (strength <= 1) return "Weak";
    if (strength <= 3) return "Medium";
    return "Strong";
  };

  const getStrengthColor = () => {
    if (strength <= 1) return "#ef4444";
    if (strength <= 3) return "#f59e0b";
    return "#22c55e";
  };

  return (
    <>
    <p id="Question">How Secure Is My Password?</p>
    <div className="container">

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{
            width: `${(strength / 4) * 100}%`,
            backgroundColor: getStrengthColor(),
          }}
        ></div>
      </div>

      <p className="strength-text">
        Strength: {password ? getStrengthLabel() : "None"}
      </p>
    </div>
    </>
  );
};

export default PasswordStrengthMeter;