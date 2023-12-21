// import passport from "passport";
// import GoogleStrategy from "passport-google-oauth20";
// import UserModel from "./models/userModel.js";

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// // Configure Google OAuth
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID:
//         "284988858980-9ij6jvpc1b2aepjkv8595tfc9ttib5cg.apps.googleusercontent.com",
//       clientSecret: "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",
//       callbackURL: "http://localhost:4000/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // Check if the user already exists in the database
//         const user = await UserModel.findOne({ googleId: profile.id });

//         if (user) {
//           return done(null, user);
//         }

//         // If the user doesn't exist, create a new user in the database
//         const newUser = new UserModel({
//           googleId: profile.id,
//           firstName: profile.name.givenName,
//           lastName: profile.name.familyName,
//           email: profile.emails[0].value,
//           role: "user", // Set the user role accordingly
//         });

//         await newUser.save();
//         return done(null, newUser);
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );

// // // Successful Google login callback
// // export const googleLoginCallback = (req, res) => {
// //   // Redirect the user to the desired page (e.g., home page)
// //   res.redirect("/");
// // };
