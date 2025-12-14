import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";

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
        <OnboardingLayout title={t("Bienvenido")} showBack={false}>
            <Head title={t("Bienvenido")} />

            <StepDescription variant="center" className="mb-10 px-4">
                {t(
                    "Para nosotros es importante saber como deseas usar la plataforma para mejorar tu experiencia y facilitar nuestros productos"
                )}
            </StepDescription>

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

            <StepActions onNext={handleNext} disabled={!formData.role} />
        </OnboardingLayout>
    );
}
