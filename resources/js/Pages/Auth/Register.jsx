import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-dark-bg font-sans">
            <div className="w-full max-w-mobile min-h-screen flex flex-col relative bg-gradient-to-b from-primary via-dark-bg to-dark-bg">
                <Head title="Register" />

                <div className="flex-1 flex flex-col justify-center px-6 pt-20">
                    <div className="flex justify-center mb-10">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-4xl">✨</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Create Account
                    </h2>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                placeholder="Full Name"
                                className="py-4"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Email"
                                className="py-4"
                                autoComplete="username"
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

                        <div>
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="Password"
                                className="py-4"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            {errors.password && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                placeholder="Confirm Password"
                                className="py-4"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            {errors.password_confirmation && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>

                        <div className="pt-4">
                            <PrimaryButton disabled={processing}>
                                Create Account
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-white/60 text-sm mb-4">
                            Or continue with
                        </p>
                        <button
                            type="button"
                            className="w-full bg-transparent border border-white text-white font-medium py-3.5 px-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 3.49v-.04c-1.24-.96-2-2.46-2-4.06s.76-3.1 2-4.06l-.23-.2c1.24-.96 3.16-1.12 4.41-.05l2.12-2.12c-1.74-1.57-4.48-1.99-6.54-1.12-4.22 1.79-5.46 7.23-2.13 10.95s8.8 3.85 11.23-.39c1.09-1.91.99-4.36.29-5.59z"
                                />
                            </svg>
                            Sign up with Google
                        </button>
                    </div>
                </div>

                <div className="p-6 pb-10 text-center">
                    <p className="text-white/80">
                        Already have an account?{" "}
                        <Link
                            href={route("login")}
                            className="text-white font-bold hover:underline"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
