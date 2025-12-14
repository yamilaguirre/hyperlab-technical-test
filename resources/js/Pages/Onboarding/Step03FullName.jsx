import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";

export default function Step03FullName() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const handleNext = (e) => {
        e.preventDefault();
        if (formData.fullName) {
            nextStep();
            router.visit(route("onboarding.step", 4));
        }
    };

    return (
        <OnboardingLayout title={t("Escribe tu nombre completo")}>
            <Head title={t("Escribe tu nombre completo")} />

            <form
                onSubmit={handleNext}
                className="flex flex-col h-full mt-10 w-full"
            >
                <TextInput
                    type="text"
                    placeholder={t("Full Name Placeholder")}
                    value={formData.fullName}
                    onChange={(e) =>
                        updateFormData({ fullName: e.target.value })
                    }
                    className="py-4 bg-dark-input"
                    autoFocus
                />

                <StepDescription className="mt-6 leading-relaxed px-1">
                    {t("Must match ID")}
                </StepDescription>

                <StepActions
                    onNext={handleNext}
                    disabled={!formData.fullName}
                    useFormSubmit={true}
                />
            </form>
        </OnboardingLayout>
    );
}
