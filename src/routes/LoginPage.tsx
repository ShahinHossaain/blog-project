import { SignIn } from "@clerk/clerk-react";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;
