import React from "react";
import { Head, Link } from "@inertiajs/react";
import TextInput from "@/Components/UI/TextInput";
import LanguageSelector from "@/Components/UI/LanguageSelector";
import useTranslation from "@/Hooks/useTranslation";

export default function Login() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-dark-bg font-sans">
            <div className="w-full max-w-mobile min-h-screen flex flex-col relative bg-gradient-to-b from-primary via-dark-bg to-dark-bg">
                <Head title={t("Login")} />

                <div className="flex-1 flex flex-col justify-center px-6 pt-20">
                    <div className="flex justify-center mb-10">
                        <div className="w-24 h-24 bg-transparent flex items-center justify-center">
                            <span className="text-4xl text-white">✪</span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mb-8">
                        <LanguageSelector />
                    </div>

                    <form className="space-y-4">
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder={t("Email")}
                                className="py-4 bg-white/10 border-none placeholder-white/70 text-white"
                                isFocused={true}
                            />
                        </div>

                        <div>
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                placeholder={t("Password")}
                                className="py-4 bg-white/10 border-none placeholder-white/70 text-white"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <Link
                                href="#"
                                className="text-sm text-primary hover:text-white transition-colors"
                            >
                                {t("Forgot Password?")}
                            </Link>

                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-primary shadow-sm focus:ring-primary bg-transparent"
                                />
                                <span className="ml-2 text-sm text-white">
                                    {t("Remember Me")}
                                </span>
                            </label>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-full transition-all duration-300 active:bg-white active:text-primary shadow-lg"
                            >
                                {t("Login")}
                            </button>
                        </div>
                    </form>

                    <div className="relative flex py-8 items-center">
                        <div className="flex-grow border-t border-white/20"></div>
                        <span className="flex-shrink-0 mx-4 text-white text-xs uppercase">
                            {t("OR")}
                        </span>
                        <div className="flex-grow border-t border-white/20"></div>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="w-full bg-transparent border border-white text-white font-medium py-3.5 px-4 rounded-full active:bg-white/10 transition-all flex items-center justify-center gap-2"
                        >
                            {t("Login with Google")}
                        </button>
                    </div>

                    <div className="mt-6 text-center text-xs text-white/40">
                        {t("protected by reCAPTCHA")}{" "}
                        <span className="text-primary">{t("Privacy")}</span> -{" "}
                        <span className="text-primary">{t("Terms")}</span>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href={route("onboarding.step", 1)}
                            className="text-primary font-bold hover:text-white transition-colors text-lg"
                        >
                            {t("Create an Account?")}
                        </Link>
                    </div>
                </div>

                <div className="p-6 text-center text-[10px] text-white/50 flex justify-center gap-4">
                    <span>{t("Terms of Service")}</span>
                    <span>{t("Privacy")}</span>
                    <span>{t("Cookies Policy")}</span>
                    <span>{t("Contact")}</span>
                </div>
            </div>
        </div>
    );
}
