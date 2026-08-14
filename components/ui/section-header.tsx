import { MoreHorizontal } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

interface SectionHeaderProps {
  title: string;
  showOverflow?: boolean;
  actionClassName?: string;
}

export function SectionHeader({ title, showOverflow = true, actionClassName }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-base font-semibold text-text-primary">{title}</h2>
      {showOverflow && (
        <IconButton icon={MoreHorizontal} aria-label="More options" className={actionClassName} />
      )}
    </div>
  );
}
