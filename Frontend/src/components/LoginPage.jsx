import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate =  useNavigate()

  const [role, setRole] = useState("jobseeker"); // "jobseeker" | "employer"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const isJobSeeker = role === "jobseeker";

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      role,
      email,
      password,
      rememberMe,
      ...(role === "employer" && { companyId }),
    };

    // TODO: replace with API call
    console.log("Login payload:", payload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-3">
            <span className="text-xl font-bold text-indigo-600">JP</span>
          </div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Login to Job Portal
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Choose your role and continue.
          </p>
        </div>

        {/* Role Switch */}
        <div className="flex mb-6 rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setRole("jobseeker")}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition
            ${
              isJobSeeker
                ? "bg-white shadow text-slate-900"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Job Seeker
          </button>
          <button
            type="button"
            onClick={() => setRole("employer")}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition
            ${
              !isJobSeeker
                ? "bg-white shadow text-slate-900"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Employer
          </button>
        </div>

        {/* Description */}
        <div className="mb-4 text-xs text-slate-500">
          {isJobSeeker ? (
            <p>
              Login as a job seeker to search and apply for jobs, manage your
              profile, and track your applications.
            </p>
          ) : (
            <p>
              Login as an employer to post jobs, review applications, and manage
              your company profile.
            </p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              {isJobSeeker ? "Email address" : "Work email"}
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isJobSeeker ? "you@example.com" : "you@company.com"}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Employer extra field */}
          {!isJobSeeker && (
            <div>
              <label
                htmlFor="companyId"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Company ID / Code
              </label>
              <input
                id="companyId"
                type="text"
                required
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                placeholder="Enter your company ID or code"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p className="mt-1 text-xs text-slate-400">
                This helps us verify your company account.
              </p>
            </div>
          )}

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-xs">
            <label className="inline-flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="text-indigo-600 hover:underline font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isJobSeeker ? "Login as Job Seeker" : "Login as Employer"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="px-2 text-[11px] uppercase tracking-wide text-slate-400">
              or
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Social login */}
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <span className="text-lg">G</span>
            <span>
              Continue with Google{" "}
              {isJobSeeker ? "(Job Seeker)" : "(Employer)"}
            </span>
          </button>
        </form>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-slate-500">
          {isJobSeeker ? (
            <>
              New here?{" "}
              <button
                type="button"
                className="text-indigo-600 hover:underline font-medium"
                onClick={() => navigate("/signup")}
              >
                Create job seeker account
              </button>
            </>
          ) : (
            <>
              New employer?{" "}
              <button
                type="button"
                className="text-indigo-600 hover:underline font-medium"
                onClick={() => navigate("/signup")}
              >
                Create employer account
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
