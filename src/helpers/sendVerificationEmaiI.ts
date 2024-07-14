import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmaiI";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifycode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mstry message | Verification code",
      react: VerificationEmail({ username, otp: verifycode }),
    });

    return { success: true, message: "varification email send successfuly" };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return { success: false, message: "Failed to send varification email" };
  }
}
