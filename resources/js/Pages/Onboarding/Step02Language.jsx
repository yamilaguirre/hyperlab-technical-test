import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";
import SelectInput from "@/Components/Onboarding/SelectInput";

export default function Step02Language() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const languages = ["Spanish", "English", "French"];

    const languageCodeMap = {
        Spanish: "es",
        English: "en",
        French: "fr",
    };

    const handleLanguageChange = (selectedLanguage) => {
        updateFormData({ language: selectedLanguage });

        const languageCode = languageCodeMap[selectedLanguage];

        if (languageCode) {
            router.get(
                `/language/${languageCode}`,
                {},
                {
                    preserveScroll: true,
                    preserveState: true,
                    only: ["locale", "translations"],
                }
            );
        }
    };

    const handleNext = () => {
        if (formData.language) {
            nextStep();
            router.visit(route("onboarding.step", 3));
        }
    };

    const languageOptions = languages.map((lang) => ({
        value: lang,
        label: lang,
    }));

    return (
        <OnboardingLayout title={t("Selecciona tu idioma")}>
            <Head title={t("Selecciona tu idioma")} />

            <StepDescription variant="center" className="mb-10 px-2 leading-relaxed">
                {t("Reach other markets")}
            </StepDescription>

            <div className="flex flex-col flex-grow w-full">
                <SelectInput
                    value={formData.language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    options={languageOptions}
                    placeholder={t("Select a language")}
                />

                <StepActions
                    onNext={handleNext}
                    disabled={!formData.language}
                />
            </div>
        </OnboardingLayout>
    );
}
