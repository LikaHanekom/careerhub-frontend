"use client";

import { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";
import { JobListing } from "../types"; // Adjust path as needed

// This is where you would typically fetch your data
const jobs: JobListing[] = [
  {
    id: "1",
    title: "Frontend Engineer",
    company: "Tech Solutions",
    location: "Cape Town",
    employmentType: "Full-Time",
    salaryMin: 50000,
    salaryMax: 70000,
    postedAt: "2026-06-15T08:00:00Z",
    isActive: true,
    applicantCount: 5,
    isAvailable: true,
  },
  {
    id: "2",
    title: "Junior Designer",
    company: "Creative Agency",
    location: "Johannesburg",
    employmentType: "Internship",
    salaryMin: 12000,
    salaryMax: 18000,
    postedAt: "2026-06-16T14:30:00Z",
    isActive: false,
    applicantCount: 0,
    isAvailable: true,
  },
  {
    id: "3",
    title: "Junior Software Engineer",
    company: "BitCube",
    location: "Bloemfontein",
    employmentType: "Internship",
    salaryMin: 12000,
    salaryMax: 18000,
    postedAt: "2026-06-16T14:30:00Z",
    isActive: false,
    applicantCount: 0,
    isAvailable: true,
  },
  {
    id: "4",
    title: "Junior Technical Support",
    company: "University of the Free State",
    location: "Bloemfontein",
    employmentType: "Internship",
    salaryMin: 12000,
    salaryMax: 18000,
    postedAt: "2026-06-16T14:30:00Z",
    isActive: false,
    applicantCount: 0,
    isAvailable: true,
  },
  {
    id: "5",
    title: "Front End Developer",
    company: "Absa Bank",
    location: "CapeTown",
    employmentType: "Full-Time",
    salaryMin: 12000,
    salaryMax: 18000,
    postedAt: "2026-06-16T14:30:00Z",
    isActive: false,
    applicantCount: 0,
    isAvailable: true,
  },
  {
    id: "6",
    title: "Senior Software Engineer",
    company: "Standard Bank",
    location: "Johannesburg",
    employmentType: "Contract",
    salaryMin: 12000,
    salaryMax: 18000,
    postedAt: "2026-05-16T14:30:00Z",
    isActive: false,
    applicantCount: 0,
    isAvailable: true,
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Restore selection from sessionStorage on mount
  useEffect(() => {
    const savedId = sessionStorage.getItem('selectedJobId');
    if (savedId) {
      // Only restore if job still exists in our list
      const jobExists = jobs.some(job => job.id === savedId);
      if (jobExists) {
        setSelectedId(savedId);
      }
    }
  }, []); // Empty dependency array: runs once on mount

  // Persist selection changes to sessionStorage
  useEffect(() => {
    if (selectedId !== null) {
      sessionStorage.setItem('selectedJobId', selectedId);
    } else {
      sessionStorage.removeItem('selectedJobId');
    }
  }, [selectedId]); // Runs whenever selectedId changes

  const selectedJob = jobs.find((j) => j.id === selectedId);

  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-black">
      <main className="mx-auto max-w-3xl space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Job Openings
        </h1>

        {selectedJob && (
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold text-blue-900">Selected Opportunity</h2>
            <p className="text-blue-700">
              {selectedJob.title} at {selectedJob.company}
            </p>
          </div>
        )}

        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            isSelected={selectedId === job.id}
            // Use your toggle logic here
            onSelect={() => setSelectedId(selectedId === job.id ? null : job.id)}
          />
        ))}
      </main>
    </div>
  );
}