import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FileVideo } from "lucide-react";
import { EmploymentType } from "../types";


interface JobStatusBadgeProps {
  employmentType: EmploymentType;
  isActive: boolean;
}

const employmentTypeColors: Record<EmploymentType, string> = {
  "Full-Time": "bg-blue-500 hover:bg-blue-600",
  "Part-Time": "bg-green-500 hover:bg-green-600",
  "Contract": "bg-purple-500 hover:bg-purple-600",
  "Internship": "bg-orange-500 hover:bg-orange-600",
  "Freelance": "bg-gray-500 hover:bg-gray-600", // Added to match your type
};

export function JobStatusBadge({employmentType, isActive}: JobStatusBadgeProps){
    return(
        <div className="flex gap-2">
            <Badge className ={employmentTypeColors[employmentType]}>
                {employmentType}
            </Badge>
            {!isActive &&(<Badge variant = "destructive">Expired</Badge>)}
        </div>
    )
}