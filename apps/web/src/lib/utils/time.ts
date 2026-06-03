import { DateTime, Interval } from "luxon";

function plurality(intervalOfTime: number, singularUnit: string) {
  if (intervalOfTime === 1) {
    return `${intervalOfTime} ${singularUnit}`;
  } else {
    return `${intervalOfTime} ${singularUnit}s`;
  }
}
export function getTimeDeltaFromNow(pastDate: DateTime, now: DateTime) {
  const interval = Interval.fromDateTimes(pastDate, now);
  const daysCovered = interval.count("day");
  const duration = interval.toDuration([
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ]);
  if (!interval.isValid) return "in the future";

  if (daysCovered === 1) {
    if (duration.hours > 0) {
      return `${plurality(duration.hours, "hour")} ago`;
    }
    if (duration.minutes > 0) {
      return `${plurality(duration.minutes, "minute")} ago`;
    }
    return `${plurality(duration.seconds, "second")} ago`;
  } else {
    return daysCovered - 1 === 1 ? "yesterday" : `${daysCovered - 1} days ago`;
  }
}
