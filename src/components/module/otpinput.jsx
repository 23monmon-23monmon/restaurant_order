import React, { useState } from "react";

const OTPInput = ({ length, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = Array.from({ length }, (_, i) => i);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Only allow numeric input
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only the last digit
    setOtp(newOtp);

    // Automatically move to the next input if available
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    // Trigger onComplete if all fields are filled
    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move focus to the previous input on Backspace
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {inputs.map((_, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            borderButton: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;