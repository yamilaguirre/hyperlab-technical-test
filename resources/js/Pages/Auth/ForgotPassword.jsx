import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-dark-bg font-sans">
            <div className="w-full max-w-mobile min-h-screen flex flex-col relative bg-gradient-to-b from-primary via-dark-bg to-dark-bg">
                <Head title="Forgot Password" />

                <div className="flex-1 flex flex-col justify-center px-6 pt-20">
                    <div className="flex justify-center mb-10">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-4xl">🔑</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Reset Password
                    </h2>

                    <p className="text-white/80 text-center text-sm mb-6">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </p>

                    {status && (
                        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Email"
                                className="py-4"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="pt-4">
                            <PrimaryButton disabled={processing}>
                                Email Password Reset Link
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                <div className="p-6 pb-10 text-center">
                    <p className="text-white/80">
                        <Link
                            href={route("login")}
                            className="text-white font-bold hover:underline"
                        >
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
