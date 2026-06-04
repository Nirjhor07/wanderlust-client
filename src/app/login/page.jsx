"use client";

import Link from "next/link";
import { Input, Button, Card, Checkbox } from "@heroui/react";

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataaa = Object.fromEntries(formData.entries());

    // TODO: Implement actual login logic
    // console.log("Login attempt:", data.fullName);
    console.log(dataaa);
    const { password, imageUrl, fullName, email } = dataaa;
    console.log(password);
    // const { data: loginData, error } = await authClient.signUp.email({
    //   // name: data.fullName,
    //   // email: "john.doe@example.com", // required
    //   // password: "password1234", // required
    //   // image: "https://example.com/image.png",
    //   // callbackURL: "https://example.com/callback",
    // });
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth login
    console.log("Google login clicked");
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Wanderlust</h1>
          <p className="text-indigo-200">
            Welcome back to your travel companion
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <Checkbox name="rememberMe" className="text-indigo-400">
                <span className="text-sm text-slate-300">Remember me</span>
              </Checkbox>
              <Link
                href="#"
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-indigo-500 text-white font-semibold py-2.5 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 shadow-lg"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-slate-400">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Login Button */}
          <Button
            onClick={handleGoogleLogin}
            variant="bordered"
            className="w-full border-white/20 text-white hover:bg-white/10 transition-colors duration-200 py-2.5 rounded-lg flex items-center justify-center gap-2"
          >
            <span className="text-lg font-bold">G</span>
            Sign in with Google
          </Button>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-slate-300">
            Dont have an account?{" "}
            <Link
              href="/signup"
              className="text-indigo-400 font-semibold hover:text-indigo-300"
            >
              Sign up
            </Link>
          </p>
        </Card>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-8">
          By signing in, you agree to our{" "}
          <Link href="#" className="text-indigo-400 hover:text-indigo-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-indigo-400 hover:text-indigo-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
