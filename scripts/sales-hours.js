/**
 * Saga sales lines are open Monday to Friday, 9am to 6pm UK time.
 * @param {Date} [now] the moment to check (defaults to the current time)
 * @returns {boolean} true while the sales lines are open
 */
export default function salesLineOpen(now = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', weekday: 'short', hour: 'numeric', hourCycle: 'h23',
  }).formatToParts(now).map((p) => [p.type, p.value]));
  const hour = Number(parts.hour);
  return !['Sat', 'Sun'].includes(parts.weekday) && hour >= 9 && hour < 18;
}
