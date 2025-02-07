import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">
          Create Your Account
        </h1>
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none w-full",
              headerTitle: "text-[#1a1a1a] text-xl font-bold",
              headerSubtitle: "text-[#666]",
              formFieldLabel: "text-[#1a1a1a]",
              formButtonPrimary:
                "bg-[#4a90e2] hover:bg-[#357abd] text-white font-bold py-2 px-4 rounded",
              footerActionText: "text-[#666]",
              footerActionLink: "text-[#4a90e2] hover:text-[#357abd]",
              socialButtonsBlockButton:
                "border-[#ddd] hover:bg-[#f0f2f5] text-[#1a1a1a]",
            },
          }}
        />
      </div>
    </div>
  );
}
