export interface TimelineStepProps {
  year: number;
  text: string;
}
export function TimelineStep({ year, text }: TimelineStepProps) {
  return (
    <div className="timeline-step">
      <div
        className="timeline-content"
        data-toggle="popover"
        data-trigger="hover"
        data-placement="top"
      >
        <div className="inner-circle"></div>
        <p className="h6 mt-3 mb-1">{year}</p>
        <p className="h6 text-muted mb-0 mb-lg-0">{text}</p>
      </div>
    </div>
  );
}
