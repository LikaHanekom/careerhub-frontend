import { formatDistanceToNow, parseISO } from 'date-fns';
import { JobListing } from "../types";

interface JobCardProps {
    job: JobListing;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

const getBadgeColor = (type: JobListing['employmentType']) => {
  const styles: Record<string, string> = {
    'Full-Time': 'bg-blue-100 text-blue-800',
    'Part-Time': 'bg-green-100 text-green-800',
    'Contract': 'bg-purple-100 text-purple-800',
    'Internship': 'bg-yellow-100 text-yellow-800',
    'Freelance': 'bg-orange-100 text-orange-800',
  };
  return styles[type] || 'bg-gray-100 text-gray-800';
}

// Destructured props 
export default function JobCard({ job, isSelected, onSelect }: JobCardProps) {
    const formattedSalary = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
        maximumFractionDigits: 0,
    });

    return (
        <div
            onClick={() => onSelect(job.id)}
            className={`border p-4 rounded-lg shadow-sm cursor-pointer transition-all ${
                isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'hover:shadow-md'
            }`}
        >
            {!job.isActive && (
                <span className="text-red-600 font-bold block text-sm mb-1">
                    {job.isAvailable ? 'Closed' : 'Expired'}
                </span>
            )}

            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-600">
                {job.company} · {job.location}
            </p>

            <span className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium ${getBadgeColor(job.employmentType)}`}>
                {job.employmentType}
            </span>

            <p className="font-semibold mt-2">
                {formattedSalary.format(job.salaryMin)} – {formattedSalary.format(job.salaryMax)} pm
            </p>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>{formatDistanceToNow(parseISO(job.postedAt), { addSuffix: true })}</span>
                {job.applicantCount > 0 && <span>{job.applicantCount} applicants</span>}
            </div>
        </div>
    )
}