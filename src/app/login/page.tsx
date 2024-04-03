"use client";
import { Button, GetProp, Input, Layout, Space, Typography } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import Title from "antd/es/skeleton/Title";

const { Text, Link } = Typography;
const Login: React.FC = () => {
  const numberRegex = /^[0-9\b]+$/;
  const [phone, setPhone] = useState<string>("");
  const [otpValues, setOtpValues] = useState<string>("");
  const [otpStep, setOtpStep] = useState<boolean>(false);

  const onOtpChange: GetProp<typeof Input.OTP, "onChange"> = (text) => {
    setOtpValues(text);
  };

  const handlePhoneChange = (value: any) => {
    if (value === "" || numberRegex.test(value)) {
      setPhone(value);
    }
  };

  const handleLogin = () => {
    if (!otpStep) {
      // TODO: Handle login request OTP
      setOtpStep(true);

      return;
    }

    console.log("OTP Values: ", otpValues);
  };

  return (
    <Layout className='login-wrapper'>
      <div className='login-modal'>
        <Image src='/imgs/logo.png' alt='GecGo' width={200} height={60} />
        <div className='login-intro'>
          <Text>Welcome back</Text>
          <Text>Please login to your account</Text>
        </div>
        {!otpStep ? (
          <Input
            className='login-input'
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />
        ) : (
          <Space direction='vertical' className='login-otp-root'>
            <Input.OTP
              rootClassName='login-otp-root'
              className='login-otp'
              onChange={onOtpChange}
              size='large'
              length={6}
              value={otpValues}
              autoFocus
            />
          </Space>
        )}

        <Button className='login-button' onClick={handleLogin}>
          {!otpStep ? "Request OTP" : "Login"}
        </Button>
      </div>
    </Layout>
  );
};

export default Login;
