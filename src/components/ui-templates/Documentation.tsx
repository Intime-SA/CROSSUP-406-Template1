import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Documentation() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            variant="ghost"
            className="flex items-center space-x-2"
          >
            <Link href="/documentation" className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View documentation</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
