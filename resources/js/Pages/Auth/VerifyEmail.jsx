import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/UI/PrimaryButton";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-dark-bg font-sans">
            <div className="w-full max-w-mobile min-h-screen flex flex-col relative bg-gradient-to-b from-primary via-dark-bg to-dark-bg">
                <Head title="Email Verification" />

                <div className="flex-1 flex flex-col justify-center px-6 pt-20">
                    <div className="flex justify-center mb-10">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-4xl">📧</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Verify Email
                    </h2>

                    <p className="text-white/80 text-center text-sm mb-6">
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you? If you didn't receive the email, we
                        will gladly send you another.
                    </p>

                    {status === "verification-link-sent" && (
                        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                            A new verification link has been sent to the email
                            address you provided during registration.
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <div className="pt-4">
                            <PrimaryButton
                                disabled={processing}
                                className="w-full"
                            >
                                Resend Verification Email
                            </PrimaryButton>
                        </div>

                        <div>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="w-full bg-transparent border border-white text-white font-medium py-3.5 px-4 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Log Out
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="p-6 pb-10 text-center">
                    <p className="text-white/80 text-sm">
                        Didn't receive the email? Check your spam folder.
                    </p>
                </div>
            </div>
        </div>
    );
}
