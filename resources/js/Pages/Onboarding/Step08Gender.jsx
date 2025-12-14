import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

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
        <OnboardingLayout title={t("Gender")}>
            <Head title={t("Gender")} />

            <p className="text-white/80 text-sm mb-8">
                {t("Select your gender")}
            </p>

            <div className="flex flex-col gap-6 w-full">
                {genders.map((genderKey) => (
                    <label
                        key={genderKey}
                        className="flex items-center gap-4 cursor-pointer group"
                    >
                        <div className="flex items-center justify-center">
                            <input
                                type="radio"
                                name="gender"
                                value={genderKey}
                                checked={formData.gender === genderKey}
                                onChange={() =>
                                    updateFormData({ gender: genderKey })
                                }
                                className="w-6 h-6 appearance-none border-2 border-white rounded-full cursor-pointer checked:border-primary checked:bg-primary transition-all"
                            />
                        </div>
                        <span className="text-white text-lg group-hover:text-primary transition-colors">
                            {t(genderKey)}
                        </span>
                    </label>
                ))}
            </div>

            <div className="mt-auto pt-12 pb-8 w-full">
                <PrimaryButton onClick={handleNext} disabled={!formData.gender}>
                    {t("Next")}
                </PrimaryButton>
            </div>
        </OnboardingLayout>
    );
}
