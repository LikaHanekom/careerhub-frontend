import { JobListing } from "../types";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: JobListing[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function JobList({ jobs, selectedId, onSelect }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-20 border-2 border-dashed rounded-lg bg-zinc-50">
        <h3 className="text-xl font-bold text-gray-700">No career opportunities found</h3>
        <p className="text-gray-500 mt-2">
          We're currently scouting for new talent. 
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600 font-medium">
        Showing {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id} //key 
            job={job}
            isSelected={selectedId === job.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}