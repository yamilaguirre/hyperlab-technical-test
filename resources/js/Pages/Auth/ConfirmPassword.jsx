import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-dark-bg font-sans">
            <div className="w-full max-w-mobile min-h-screen flex flex-col relative bg-gradient-to-b from-primary via-dark-bg to-dark-bg">
                <Head title="Confirm Password" />

                <div className="flex-1 flex flex-col justify-center px-6 pt-20">
                    <div className="flex justify-center mb-10">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-4xl">🔒</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Confirm Password
                    </h2>

                    <p className="text-white/80 text-center text-sm mb-6">
                        This is a secure area of the application. Please confirm
                        your password before continuing.
                    </p>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="Password"
                                className="py-4"
                                isFocused={true}
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

                        <div className="pt-4">
                            <PrimaryButton disabled={processing}>
                                Confirm
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                <div className="p-6 pb-10 text-center">
                    <p className="text-white/80">
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-white font-bold hover:underline"
                        >
                            Log Out
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
