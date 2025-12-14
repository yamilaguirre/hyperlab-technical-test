import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";
import RadioOption from "@/Components/Onboarding/RadioOption";

export default function Step08Gender() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const genders = ["Male", "Female", "Other", "Prefer not to say"];

    const handleNext = () => {
        if (formData.gender) {
            nextStep();
            router.visit(route("onboarding.step", 9));
        }
    };

    return (
        <OnboardingLayout title={t("Selecciona tu genero")}>
            <Head title={t("Selecciona tu genero")} />

            <StepDescription className="mb-8">
                {t("Select your gender")}
            </StepDescription>

            <div className="flex flex-col gap-6 w-full">
                {genders.map((genderKey) => (
                    <RadioOption
                        key={genderKey}
                        name="gender"
                        value={genderKey}
                        checked={formData.gender === genderKey}
                        onChange={() =>
                            updateFormData({ gender: genderKey })
                        }
                        label={t(genderKey)}
                    />
                ))}
            </div>

            <StepActions
                onNext={handleNext}
                disabled={!formData.gender}
            />
        </OnboardingLayout>
    );
}
