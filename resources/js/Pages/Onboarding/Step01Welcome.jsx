import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

export default function Step01Welcome() {
    const { updateFormData, formData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const handleSelectRole = (role) => {
        updateFormData({ role });
    };

    const handleNext = () => {
        if (formData.role) {
            nextStep();
            router.visit(route("onboarding.step", 2));
        }
    };

    return (
        <OnboardingLayout title={t("Choose Role")} showBack={false}>
            <Head title={t("Choose Role")} />

            <p className="text-center text-white/80 mb-10 px-4">
                {t(
                    "Para nosotros es importante saber cómo deseas usar la plataforma"
                )}
            </p>

            <div className="flex flex-col gap-6 mt-4 items-center">
                <div className="flex gap-8 items-center justify-center w-full">
                    <button
                        onClick={() => handleSelectRole("creator")}
                        className="flex items-center gap-3 group"
                    >
                        <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.role === "creator"
                                    ? "border-white"
                                    : "border-white/50"
                            }`}
                        >
                            {formData.role === "creator" && (
                                <div className="w-3 h-3 bg-white rounded-full" />
                            )}
                        </div>
                        <span className="text-xl text-white">
                            {t("Creator")}
                        </span>
                    </button>

                    <button
                        onClick={() => handleSelectRole("user")}
                        className="flex items-center gap-3 group"
                    >
                        <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.role === "user"
                                    ? "border-white"
                                    : "border-white/50"
                            }`}
                        >
                            {formData.role === "user" && (
                                <div className="w-3 h-3 bg-white rounded-full" />
                            )}
                        </div>
                        <span className="text-xl text-white">{t("User")}</span>
                    </button>
                </div>
            </div>

            <div className="mt-auto pt-12 pb-8 w-full">
                <PrimaryButton onClick={handleNext} disabled={!formData.role}>
                    {t("Next")}
                </PrimaryButton>
            </div>
        </OnboardingLayout>
    );
}
