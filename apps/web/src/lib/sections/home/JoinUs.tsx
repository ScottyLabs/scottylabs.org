import css from "./JoinUs.module.css";
const recurringEvents = [
  {
    name: "GBM",
    time: "Every other Wednesday, 5-6 PM",
    locations: [
      {
        department: "All",
        location: "Location TBD",
      },
    ],
  },
  {
    name: "Committee Work Sessions",
    time: "Saturdays, 4-6 PM",
    locations: [
      { department: "Tech", location: "Tepper 2612" },
      { department: "Design", location: "Tepper 3801" },
      { department: "Labrador", location: "Swartz Center (Tepper 2713)" },
      // { department: "Bootcamp", location: "Tepper 2613" },
      { department: "Events/Outreach/Finance", location: "Tepper 3808" },
    ],
  },
];
export default function JoinUs() {
  return (
    <div className={css["container"]}>
      <div className="centered-section">
        <h1 className={css["main-heading"]}>Join Us!</h1>
        <div className={css["times-and-calendar-wrapper"]}>
          <div className={css["recurring-section"]}>
            <h2 className={css["recurring-section__header"]}>Recurring</h2>
            {recurringEvents.map((event) => (
              <div className={css["event"]} key={event.name}>
                <h3 className={css["event__header"]}>{event.name}</h3>
                <p className={css["event__subheading"]}>{event.time}</p>
                {event.locations.map(({ department, location }) => (
                  <p className={css["event__location"]} key={department}>
                    <span className={css["event__location__department"]}>
                      {department}{" "}
                    </span>
                    {location}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className={css["calendar"]}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=admin%40scottylabs.org&ctz=America%2FNew_York&mode=week"
              width="0"
              height="0"
            />
          </div>
        </div>
        {/* <Button
          label="Subscribe to All Events"
          variant="primary"
          className={css["all-events-button"]}
        /> */}
      </div>
    </div>
  );
}
