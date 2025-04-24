import { SignIn } from "@clerk/clerk-react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;
