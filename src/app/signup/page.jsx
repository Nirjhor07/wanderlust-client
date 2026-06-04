"use client";

import Link from "next/link";
import { Input, Button, Card, Checkbox } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const { password, imageUrl, fullName, email } = data;

    const { data: loginData, error } = await authClient.signUp.email({
      name: fullName,
      email,
      password,
      image: imageUrl,
    });
    console.log(loginData);
  };

  const handleGoogleSignUp = () => {
    // TODO: Implement Google OAuth signup
    console.log("Google sign up clicked");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Wanderlust</h1>
          <p className="text-indigo-200">Start your adventure with us</p>
        </div>

        {/* Sign Up Card */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <Input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full"
                required
              />
            </div>

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
                placeholder="Create a password"
                className="w-full"
                required
              />
            </div>

            {/* Image URL Input */}
            <div>
              <Input
                type="url"
                name="imageUrl"
                placeholder="Enter your image URL"
                className="w-full"
                required
              />
            </div>

            {/* Agree to Terms */}
            <div className="flex items-start">
              <Checkbox name="agreeToTerms" className="text-indigo-400 mt-1">
                <span className="text-xs text-slate-300">
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </Checkbox>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-indigo-500 text-white font-semibold py-2.5 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 shadow-lg"
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-slate-400">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Sign Up Button */}
          <Button
            onClick={handleGoogleSignUp}
            variant="bordered"
            className="w-full border-white/20 text-white hover:bg-white/10 transition-colors duration-200 py-2.5 rounded-lg flex items-center justify-center gap-2"
          >
            <span className="text-lg font-bold">G</span>
            Sign up with Google
          </Button>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-slate-300">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-400 font-semibold hover:text-indigo-300"
            >
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
