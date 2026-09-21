"use client";

import { useEffect, useState } from "react";
import {
  X,
  Upload,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

export default function JobApplicationModal({ job, onClose }) {
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!job) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend/email integration can be added later.
    console.log("Application submitted for:", job.title);

    alert(
      "Your application has been received. We will contact you if your profile is shortlisted."
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071923]/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-5xl overflow-hidden bg-[#f4f0e8] shadow-2xl">
        {/* Left side */}
        <div className="hidden w-[38%] bg-[#071923] p-10 text-white lg:block">
          <div className="relative h-full">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#b99a63]">
                Apply for
              </p>

              <h2 className="mt-5 text-4xl leading-tight">
                {job.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/55">
                {job.summary}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <div className="border-t border-white/10 pt-7">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Salary
                    </p>

                    <p className="mt-2 text-sm">
                      {job.salary}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Contract
                    </p>

                    <p className="mt-2 text-sm">
                      {job.contract}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Rotation
                    </p>

                    <p className="mt-2 text-sm">
                      {job.rotation}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Department
                    </p>

                    <p className="mt-2 text-sm">
                      {job.department}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="relative max-h-[92vh] flex-1 overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-[#071923]/10 bg-white text-[#071923] transition hover:bg-[#071923] hover:text-white"
            aria-label="Close application form"
          >
            <X size={19} strokeWidth={1.3} />
          </button>

          <div className="p-7 pt-20 md:p-10 md:pt-20">
            <div className="lg:hidden">
              <p className="text-xs uppercase tracking-[0.35em] text-[#b99a63]">
                Apply for
              </p>

              <h2 className="mt-3 text-3xl text-[#071923]">
                {job.title}
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-4 border-y border-[#071923]/10 py-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#071923]/40">
                    Salary
                  </p>
                  <p className="mt-1 text-sm text-[#071923]">
                    {job.salary}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#071923]/40">
                    Contract
                  </p>
                  <p className="mt-1 text-sm text-[#071923]">
                    {job.contract}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#b99a63]">
                Job Description
              </p>

              <p className="mt-4 text-sm leading-7 text-[#071923]/65">
                {job.summary}
              </p>

              <h3 className="mt-7 text-lg text-[#071923]">
                Responsibilities
              </h3>

              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[#071923]/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-[#b99a63]" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 text-lg text-[#071923]">
                Requirements
              </h3>

              <ul className="mt-4 space-y-2">
                {job.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[#071923]/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-[#b99a63]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#071923]/10 pt-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#b99a63]">
                Application
              </p>

              <h3 className="mt-3 text-3xl text-[#071923]">
                Tell us about yourself.
              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#071923]/55">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      strokeWidth={1.2}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b99a63]"
                    />

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full border border-[#071923]/15 bg-white px-11 py-3.5 text-sm text-[#071923] outline-none transition focus:border-[#b99a63]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#071923]/55">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      strokeWidth={1.2}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b99a63]"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full border border-[#071923]/15 bg-white px-11 py-3.5 text-sm text-[#071923] outline-none transition focus:border-[#b99a63]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#071923]/55">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        strokeWidth={1.2}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b99a63]"
                      />

                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full border border-[#071923]/15 bg-white px-11 py-3.5 text-sm outline-none transition focus:border-[#b99a63]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#071923]/55">
                      Country
                    </label>

                    <div className="relative">
                      <MapPin
                        size={17}
                        strokeWidth={1.2}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b99a63]"
                      />

                      <input
                        type="text"
                        name="country"
                        required
                        placeholder="Country"
                        className="w-full border border-[#071923]/15 bg-white px-11 py-3.5 text-sm outline-none transition focus:border-[#b99a63]"
                      />
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#071923]/55">
                    Years of Experience
                  </label>

                  <select
                    name="experience"
                    required
                    className="w-full border border-[#071923]/15 bg-white px-4 py-3.5 text-sm text-[#071923] outline-none transition focus:border-[#b99a63]"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0–1 years</option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5-10">5–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                {/* CV */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#071923]/55">
                    Upload CV
                  </label>

                  <label className="flex cursor-pointer items-center gap-4 border border-dashed border-[#071923]/20 bg-white px-5 py-5 transition hover:border-[#b99a63]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f4f0e8] text-[#b99a63]">
                      <Upload size={18} strokeWidth={1.2} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-[#071923]">
                        {fileName || "Choose your CV"}
                      </p>

                      <p className="mt-1 text-xs text-[#071923]/40">
                        PDF, DOC or DOCX
                      </p>
                    </div>

                    <input
                      type="file"
                      name="cv"
                      required
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(event) => {
                        setFileName(
                          event.target.files?.[0]?.name || ""
                        );
                      }}
                    />
                  </label>
                </div>

                {/* Cover message */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#071923]/55">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us briefly about yourself..."
                    className="w-full resize-none border border-[#071923]/15 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b99a63]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 bg-[#071923] px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-[#b99a63]"
                >
                  <FileText size={17} strokeWidth={1.2} />
                  Submit Application
                </button>

                <p className="text-center text-[11px] leading-5 text-[#071923]/40">
                  By submitting this application, you confirm that the
                  information provided is accurate.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}