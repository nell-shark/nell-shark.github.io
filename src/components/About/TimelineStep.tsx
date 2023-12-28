export interface TimelineStepProps {
  text: string;
  year: number;
}

export function TimelineStep({ text, year }: TimelineStepProps) {
  return (
    <div className="timeline-step">
      <div className="timeline-content">
        <div className="inner-circle"></div>
        <p className="h6 mt-3 mb-1">{text}</p>
        <p className="h6 text-muted mb-0 mb-lg-0">{year}</p>
      </div>
    </div>
  );
}
