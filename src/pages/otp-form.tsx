import { useEffect, useRef, useState } from "react";

interface OTPProps {
  otplength?: number;
}

export default function OTP({ otplength = 6 }: OTPProps) {
  const [otpfields, setOtpFields] = useState<string[]>(
    new Array(otplength).fill(""),
  );
  const [OTP, setOTP] = useState("");

  const fieldsRefs = useRef<any>([]);

  useEffect(() => {
    fieldsRefs.current[0].focus();
  }, []);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const key = e.key;
    const copyFields = [...otpfields];

    if (key === "ArrowRight" && index + 1 < otpfields.length) {
      fieldsRefs.current[index + 1].focus();
      return;
    }
    if (key === "ArrowLeft" && index > 0) {
      fieldsRefs.current[index - 1].focus();
      return;
    }

    if (key === "Backspace") {
      copyFields[index] = "";
      setOtpFields(copyFields);
      if (index > 0) fieldsRefs.current[index - 1].focus();
      return;
    }

    if (isNaN(parseInt(key))) return;

    copyFields[index] = e.key;
    setOtpFields(copyFields);
    if (index + 1 < otpfields.length) fieldsRefs.current[index + 1].focus();
    if (copyFields.join("").length === otplength) {
      setOTP(copyFields.join(""));
    }
  };

  return (
    <>
      <div className="container mx-auto mt-5 flex min-h-[50vh] w-full flex-col items-center justify-center gap-x-3 gap-y-5 border">
        <div className="flex items-center justify-center gap-x-3">
          {otpfields.map((val, index) => {
            return (
              <input
                type="text"
                key={index}
                value={val}
                className="h-12 w-12 text-center text-2xl text-black"
                onKeyDown={(e) => handleKeyDown(e, index)}
                onChange={() => {}}
                ref={(currInput) => (fieldsRefs.current[index] = currInput)}
              />
            );
          })}
        </div>
        {OTP && <h2 className="text-2xl">🎉 {OTP} 🎊</h2>}
      </div>
    </>
  );
}
