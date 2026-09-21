"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  DollarSign,
} from "lucide-react";

import { jobs } from "@/data/jobs";
import JobApplicationModal from "./JobApplicationModal";

export default function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <section className="bg-[#f4f0e8] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#b99a63]">
                Opportunities
              </p>

              <h2 className="mt-5 text-5xl leading-tight text-[#071923] md:text-6xl">
                Open
                <br />
                Positions
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-[#071923]/65">
                Explore career opportunities aboard Arabian Queen.
                Select a position to view the job description,
                responsibilities, requirements and application details.
              </p>

              {/* Contract information */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 border border-[#071923]/10 bg-white px-4 py-3">
                  <Clock3
                    size={16}
                    strokeWidth={1.2}
                    className="text-[#b99a63]"
                  />

                  <span className="text-xs uppercase tracking-[0.15em] text-[#071923]/65">
                    9 Month Contract
                  </span>
                </div>

                <div className="flex items-center gap-2 border border-[#071923]/10 bg-white px-4 py-3">
                  <BriefcaseBusiness
                    size={16}
                    strokeWidth={1.2}
                    className="text-[#b99a63]"
                  />

                  <span className="text-xs uppercase tracking-[0.15em] text-[#071923]/65">
                    4 Months On / 2 Months Off
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs */}
          <div className="mt-16 border-t border-[#071923]/15">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                type="button"
                onClick={() => setSelectedJob(job)}
                className="group grid w-full gap-5 cursor-pointer border-b border-[#071923]/15 py-5 text-left transition duration-300 hover:bg-white md:grid-cols-[80px_90px_1fr_auto_auto] md:items-center md:gap-7 md:px-4"
              >
                {/* Number */}
                <span className="hidden text-xs tracking-[0.2em] text-[#071923]/30 md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Small photo */}
                <div className="relative h-20 w-full overflow-hidden bg-[#071923]/10 md:h-16 md:w-20">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Job */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl text-[#071923] transition group-hover:text-[#b99a63]">
                      {job.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-sm text-[#071923]/50">
                    {job.department}
                  </p>
                </div>

                {/* Salary */}
                <div className="flex items-center gap-2 md:block">
                  <DollarSign
                    size={15}
                    strokeWidth={1.2}
                    className="text-[#b99a63] md:hidden"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#071923]/35">
                      Salary
                    </p>

                    <p className="mt-1 text-sm text-[#071923]">
                      {job.salary}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-3">
                  <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#071923]/40 transition group-hover:text-[#071923] md:block">
                    View Details
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center border border-[#071923]/15 transition duration-300 group-hover:border-[#b99a63] group-hover:bg-[#b99a63] group-hover:text-white">
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.2}
                      className="transition text-black duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 bg-[#b99a63]" />

            <p className="max-w-3xl text-xs leading-6 text-[#071923]/45">
              Employment terms, responsibilities and compensation are
              subject to the applicable employment agreement and final
              company confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <JobApplicationModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
}