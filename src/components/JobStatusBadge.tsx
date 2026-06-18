import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EmploymentType } from "../types";

interface JobStatusBadgeProps {
  employmentType: EmploymentType;
  isActive: boolean;
}
 //temporary inline style
const employmentTypeStyles: Record<EmploymentType, React.CSSProperties> = {
  "Full-Time":  { borderColor: "#bfdbfe", backgroundColor: "#eff6ff", color: "#1d4ed8" },
  "Part-Time":  { borderColor: "#bbf7d0", backgroundColor: "#f0fdf4", color: "#15803d" },
  "Contract":   { borderColor: "#e9d5ff", backgroundColor: "#faf5ff", color: "#7e22ce" },
  "Internship": { borderColor: "#fed7aa", backgroundColor: "#fff7ed", color: "#c2410c" },
  "Freelance":  { borderColor: "#e5e7eb", backgroundColor: "#f9fafb", color: "#374151" },
};

 /*
 With Tailwind
const employmentTypeColors: Record<EmploymentType, string> = {
  "Full-Time":  "border-blue-200   bg-blue-50   text-blue-700   dark:border-blue-800   dark:bg-blue-950   dark:text-blue-400",
  "Part-Time":  "border-green-200  bg-green-50  text-green-700  dark:border-green-800  dark:bg-green-950  dark:text-green-400",
  "Contract":   "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-400",
  "Internship": "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-400",
  "Freelance":  "border-gray-200   bg-gray-50   text-gray-700   dark:border-gray-700   dark:bg-gray-800   dark:text-gray-400",
};*/

export function JobStatusBadge({ employmentType, isActive }: JobStatusBadgeProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
      <Badge
        variant="outline"
        style={employmentTypeStyles[employmentType]}
      >
        {employmentType}
      </Badge>

      {!isActive && (
        <Badge variant="destructive" className="shrink-0">
          Expired
        </Badge>
      )}
    </div>
  );
}