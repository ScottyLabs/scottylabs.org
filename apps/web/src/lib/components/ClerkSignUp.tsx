import { SignUp } from "@clerk/react-router";
import css from "./ClerkSignIn.module.css";

export default function ClerkSignUp() {
  return "Clerk sign up on scottylabs.org (the landing page) has been disabled due to apparent lack of use. If your app relies on this login flow, please DM Eric Xu on Slack and he'll bring this back up. (there is accounts.scottylabs.org instead, which is Clerk-run, that you can possibly use)";
  return (
    <div className={css["sign-in-container"]}>
      <SignUp
        appearance={{
          elements: {
            footerAction: {
              display: "none",
            },
            formButtonPrimary: {
              boxSizing: "border-box",
              // so that the sign in button width matches input field width
            },
            formFieldHintText__emailAddress: {
              display: "none", // technically not optional
            },
          },
        }}
      />
    </div>
  );
}
