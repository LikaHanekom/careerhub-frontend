import { formatDistanceToNow, parseISO } from 'date-fns';
import { JobListing } from "../types";
import { JobStatusBadge } from "./JobStatusBadge";

interface JobCardProps {
    job: JobListing;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

const salaryFormatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
});

export default function JobCard({ job, isSelected, onSelect }: JobCardProps) {
    return (
        <div
            onClick={() => onSelect(job.id)}
            className={`border p-4 rounded-lg shadow-sm cursor-pointer transition-all ${
                isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'hover:shadow-md'
            }`}
        >
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-600 mb-2">
                {job.company} · {job.location}
            </p>

            {/* Replaced the manual span with new Badge component */}
            <JobStatusBadge 
                employmentType={job.employmentType} 
                isActive={job.isActive} 
            />

            <p className="font-semibold mt-2">
                {salaryFormatter.format(job.salaryMin)} – {salaryFormatter.format(job.salaryMax)} pm
            </p>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>{formatDistanceToNow(parseISO(job.postedAt), { addSuffix: true })}</span>
                {job.applicantCount > 0 && <span>{job.applicantCount} applicants</span>}
            </div>
        </div>
    )
}