import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

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
        <OnboardingLayout title={t("Write your Full Name")}>
            <Head title={t("Full Name")} />

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

                <p className="mt-6 text-white/80 text-sm leading-relaxed px-1">
                    {t("Must match ID")}
                </p>

                <div className="mt-auto pt-12 pb-8 w-full">
                    <PrimaryButton type="submit" disabled={!formData.fullName}>
                        {t("Next")}
                    </PrimaryButton>
                </div>
            </form>
        </OnboardingLayout>
    );
}
