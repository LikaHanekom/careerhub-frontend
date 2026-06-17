import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EmploymentType } from "../types";

interface JobStatusBadgeProps {
  employmentType: EmploymentType;
  isActive: boolean;
}

//Added: Hover effect added, dark: 
const employmentTypeColors: Record<EmploymentType, string> = {
  "Full-Time": "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
  "Part-Time": "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
  "Contract": "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700",
  "Internship": "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700",
  "Freelance": "bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700",
};

export function JobStatusBadge({ employmentType, isActive }: JobStatusBadgeProps) {
  return (
    // Fragment ensures we don't add an extra block-level div
    <>
      <Badge className={cn("text-white border-none", employmentTypeColors[employmentType])}>
        {employmentType}
      </Badge>
      
      {!isActive && (
        <Badge variant="destructive" className="dark:bg-red-900">
          Expired
        </Badge>
      )}
    </>
  );
}