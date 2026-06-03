import { SignIn } from "@clerk/react-router";
import css from "./ClerkSignIn.module.css";
export default function ClerkSignIn() {
  return "Clerk sign in on scottylabs.org (the landing page) has been disabled due to apparent lack of use. If your app relies on this login flow, please DM Eric Xu on Slack and he'll bring this back up. (there is accounts.scottylabs.org instead, which is Clerk-run, that you can possibly use)";

  return (
    <div className={css["sign-in-container"]}>
      <SignIn
        withSignUp={false}
        // signUpUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        appearance={{
          elements: {
            footerAction: {
              display: "none", // hide sign up button
            },
            formButtonPrimary: {
              boxSizing: "border-box",
              // so that the sign in button width matches input field width
            },
          },
        }}
      />
    </div>
  );
}
