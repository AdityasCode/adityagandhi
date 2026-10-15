import { about } from "@/app/resources/content";
import { Button } from "@/once-ui/components";

export function ScheduleCall({ className }: { className?: string }) {
  if (!about.calendar.display || !about.calendar.link) return null;

  return (
    <Button
      className={className}
      href={about.calendar.link}
      prefixIcon="calendar"
      arrowIcon
      variant="secondary"
      size="m"
      data-border="rounded"
    >
      Schedule a call
    </Button>
  );
}
