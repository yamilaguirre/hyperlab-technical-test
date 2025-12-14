import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";

export default function Step11Description() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();
    const MIN_CHARS = 50;
    const MAX_CHARS = 250;

    const description = formData.description || "";
    const charCount = description.length;

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= MAX_CHARS) {
            updateFormData({ description: value });
        }
    };

    const handleNext = () => {
        if (charCount >= MIN_CHARS) {
            nextStep();
            router.visit(route("onboarding.step", 12)); // <<--- NAVEGA A PASO 12
        }
    };

    const isInputValid = charCount >= MIN_CHARS && charCount <= MAX_CHARS;

    return (
        <OnboardingLayout title={t("Escribe una breve descripcion")}>
            <Head title={t("Escribe una breve descripcion")} />

            <StepDescription>
                {t("Tell us a bit about yourself")}
            </StepDescription>

            <div className="flex flex-col flex-grow">
                <textarea
                    value={description}
                    onChange={handleChange}
                    maxLength={MAX_CHARS}
                    placeholder="..."
                    rows="8"
                    className="w-full bg-dark-input text-white border-transparent rounded-lg py-4 px-4 focus:ring-primary focus:border-primary resize-none flex-grow"
                />

                <div className="flex justify-between items-center mt-3 text-sm">
                    <p
                        className={`text-xs ${
                            isInputValid ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {t("Minimum 50 characters, maximum 250.")}
                    </p>
                    <span className="text-white/50">
                        {charCount} / {MAX_CHARS}
                    </span>
                </div>

                <StepActions onNext={handleNext} disabled={!isInputValid} />
            </div>
        </OnboardingLayout>
    );
}
