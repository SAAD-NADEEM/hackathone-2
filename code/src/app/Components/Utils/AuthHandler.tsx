// "use client";

// import { useEffect } from "react";
// import { useUser } from "@clerk/nextjs";

// export default function AuthHandler() {
//     const { isSignedIn, user } = useUser();

//     useEffect(() => {
//         if (isSignedIn && user) {
//             const saveUser = async () => {
//                 try {
//                     await fetch("/api/auth", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify({
//                             userId: user.id,
//                             email: user.primaryEmailAddress?.emailAddress,
//                             name: user.fullName,
//                         }),
//                     });
//                 } catch (error) {
//                     console.error("Error saving user:", error);
//                 }
//             };

//             saveUser();
//         }
//     }, [isSignedIn, user]);

//     return null; // This component only runs logic, nothing to render
// }

