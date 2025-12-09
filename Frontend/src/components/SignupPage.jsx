import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    const navigate = useNavigate()

  const [role, setRole] = useState("jobseeker"); // "jobseeker" | "employer"

  // Common
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Job seeker
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("fresher");

  // Employer
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companySize, setCompanySize] = useState("1-10");

  const isJobSeeker = role === "jobseeker";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let payload;

    if (isJobSeeker) {
      payload = {
        role: "jobseeker",
        fullName,
        email,
        phone,
        skills,
        experienceLevel,
        password,
      };
    } else {
      payload = {
        role: "employer",
        companyName,
        contactPerson,
        email,
        companyWebsite,
        companySize,
        password,
      };
    }

    // TODO: replace with API call
    console.log("Signup payload:", payload);
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
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Sign up as a job seeker or employer.
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
              Create your job seeker account to build your profile and apply to
              jobs quickly.
            </p>
          ) : (
            <p>
              Create an employer account to post jobs and manage applications.
            </p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role-specific fields */}
          {isJobSeeker ? (
            <>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Deepesh Yadav"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Skills
                </label>
                <input
                  id="skills"
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="React, Tailwind, Node.js"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="mt-1 text-xs text-slate-400">
                  Separate skills with commas.
                </p>
              </div>

              <div>
                <label
                  htmlFor="experienceLevel"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Experience level
                </label>
                <select
                  id="experienceLevel"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="fresher">Fresher</option>
                  <option value="0-1">0–1 years</option>
                  <option value="1-3">1–3 years</option>
                  <option value="3-5">3–5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Company name
                </label>
                <input
                  id="companyName"
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Acme Pvt. Ltd."
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contactPerson"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Contact person
                </label>
                <input
                  id="contactPerson"
                  type="text"
                  required
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="HR Manager name"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="companyWebsite"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Company website (optional)
                </label>
                <input
                  id="companyWebsite"
                  type="url"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  placeholder="https://yourcompany.com"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="companySize"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Company size
                </label>
                <select
                  id="companySize"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="1-10">1–10 employees</option>
                  <option value="11-50">11–50 employees</option>
                  <option value="51-200">51–200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
              </div>
            </>
          )}

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
              placeholder="Create a strong password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isJobSeeker
              ? "Create Job Seeker Account"
              : "Create Employer Account"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="px-2 text-[11px] uppercase tracking-wide text-slate-400">
              or
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Login link */}
          <p className="text-center text-xs text-slate-500">
            Already have an account?{" "}
            <button
              type="button"
              className="text-indigo-600 hover:underline font-medium"
              onClick={() => navigate("/login")}
            >
              Login here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
