import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";
import DateInput from "@/Components/Onboarding/DateInput";

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
        <OnboardingLayout title={t("¿Cuál es tu fecha de nacimiento?")}>
            <Head title={t("Birth Date")} />

            <form
                onSubmit={handleNext}
                className="flex flex-col h-full mt-10 w-full"
            >
                <DateInput
                    value={formData.birthDate || ""}
                    onChange={(e) =>
                        updateFormData({ birthDate: e.target.value })
                    }
                    max={getMaxDate()}
                    required
                />

                <StepDescription className="mt-6 leading-relaxed px-1 text-white/80 text-sm">
                    {t("Colaboramos con National Center for Missing & Exploited Children y las autoridades para la prevención de abuso y explotación de menores de edad.")}
                </StepDescription>

                <StepDescription
                    className={`mt-4 leading-relaxed px-1 ${
                        isAdult ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {t("You must be 18 or older to use the platform")}
                </StepDescription>

                <StepActions
                    onNext={handleNext}
                    disabled={!isAdult}
                    useFormSubmit={true}
                />
            </form>
        </OnboardingLayout>
    );
}
