import GoogleStrategy from "passport-google-oauth20";
import UserModel from "./models/userModel.js";

export const googleOAuthSetup = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // Assuming user.id is the user identifier (e.g., MongoDB ObjectId)
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(
    "google-signup",
    new GoogleStrategy(
      {
        clientID:
          "284988858980-9ij6jvpc1b2aepjkv8595tfc9ttib5cg.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: `https://fast-food-backend-seven.vercel.app/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await UserModel.findOne({ googleId: profile.id });

          if (user) {
            return done(null, user);
          }

          const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          };

          await newUser.save();
          return done(null, newUser);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
};
