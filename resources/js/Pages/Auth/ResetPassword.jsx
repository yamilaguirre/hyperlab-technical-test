import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-dark-bg font-sans">
            <div className="w-full max-w-mobile min-h-screen flex flex-col relative bg-gradient-to-b from-primary via-dark-bg to-dark-bg">
                <Head title="Reset Password" />

                <div className="flex-1 flex flex-col justify-center px-6 pt-20">
                    <div className="flex justify-center mb-10">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-4xl">🔐</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Create New Password
                    </h2>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Email"
                                className="py-4"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="New Password"
                                className="py-4"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            {errors.password && (
                                <p className="text-red-400 text-sm mt-2">{errors.password}</p>
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
                                    setData('password_confirmation', e.target.value)
                                }
                                required
                            />
                            {errors.password_confirmation && (
                                <p className="text-red-400 text-sm mt-2">{errors.password_confirmation}</p>
                            )}
                        </div>

                        <div className="pt-4">
                            <PrimaryButton disabled={processing}>
                                Reset Password
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
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
