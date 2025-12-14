import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

export default function Step04Email() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const handleChange = (e) => updateFormData({ email: e.target.value });

    const handleNext = (e) => {
        e.preventDefault();
        if (formData.email) {
            nextStep();
            router.visit(route("onboarding.step", 5));
        }
    };

    return (
        <OnboardingLayout title={t("Email")}>
            <Head title={t("Email")} />

            <form onSubmit={handleNext} className="flex flex-col h-full mt-6">
                <div className="space-y-4">
                    <TextInput
                        type="email"
                        placeholder={t("Email Placeholder")}
                        value={formData.email}
                        onChange={handleChange}
                        autoFocus
                        required
                    />

                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase">
                            {t("OR")}
                        </span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-white text-black font-medium py-3.5 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                    >
                        {t("Login with Google")}
                    </button>
                </div>

                <div className="mt-auto pt-8">
                    <PrimaryButton type="submit" disabled={!formData.email}>
                        {t("Next")}
                    </PrimaryButton>
                </div>
            </form>
        </OnboardingLayout>
    );
}
