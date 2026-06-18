import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EmploymentType } from "../types";

interface JobStatusBadgeProps {
  employmentType: EmploymentType;
  isActive: boolean;
}

const employmentTypeColors: Record<EmploymentType, string> = {
  "Full-Time": cn(
    "bg-blue-500 hover:bg-blue-600 text-white",
    "dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
  ),
  "Part-Time": cn(
    "bg-green-500 hover:bg-green-600 text-white",
    "dark:bg-green-600 dark:hover:bg-green-700 dark:text-white"
  ),
  "Contract": cn(
    "bg-purple-500 hover:bg-purple-600 text-white",
    "dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white"
  ),
  "Internship": cn(
    "bg-orange-500 hover:bg-orange-600 text-white",
    "dark:bg-orange-600 dark:hover:bg-orange-700 dark:text-white"
  ),
  "Freelance": cn(
    "bg-gray-500 hover:bg-gray-600 text-white",
    "dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white"
  ),
};

export function JobStatusBadge({ employmentType, isActive }: JobStatusBadgeProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge className={employmentTypeColors[employmentType]}>
        {employmentType}
      </Badge>
      
      {!isActive && (
        <Badge 
          variant="destructive"
          className={cn(
            "bg-red-500 hover:bg-red-600 text-white",
            "dark:bg-red-700 dark:hover:bg-red-800 dark:text-white"
          )}
        >
          Expired
        </Badge>
      )}
    </div>
  );
}