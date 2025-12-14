import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

export default function Step06BirthDate() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            age--;
        }
        return age;
    };

    const isAdult = formData.birthDate
        ? calculateAge(formData.birthDate) >= 18
        : false;

    const handleNext = (e) => {
        e.preventDefault();
        if (isAdult) {
            nextStep();
            router.visit(route("onboarding.step", 7));
        }
    };

    const getMaxDate = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 18);
        return date.toISOString().split("T")[0];
    };

    return (
        <OnboardingLayout title={t("Birth Date")}>
            <Head title={t("Birth Date")} />

            <form
                onSubmit={handleNext}
                className="flex flex-col h-full mt-10 w-full"
            >
                <p className="text-white/80 text-sm mb-4">
                    {t("Select your birth date")}
                </p>
                <input
                    type="date"
                    value={formData.birthDate || ""}
                    onChange={(e) =>
                        updateFormData({ birthDate: e.target.value })
                    }
                    max={getMaxDate()}
                    className="w-full bg-dark-input text-white border-transparent rounded-lg py-4 px-4 focus:ring-primary focus:border-primary"
                    required
                />

                <p
                    className={`mt-6 text-sm leading-relaxed px-1 ${
                        isAdult ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {t("You must be 18 or older to use the platform")}
                </p>

                <div className="mt-auto pt-12 pb-8 w-full">
                    <PrimaryButton type="submit" disabled={!isAdult}>
                        {t("Next")}
                    </PrimaryButton>
                </div>
            </form>
        </OnboardingLayout>
    );
}
