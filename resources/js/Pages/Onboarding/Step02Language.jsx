import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

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

    return (
        <OnboardingLayout title={t("Select Language")}>
            <Head title={t("Select Language")} />

            <p className="text-center text-white/90 mb-10 px-2 text-sm leading-relaxed">
                {t("Reach other markets")}
            </p>

            <div className="w-full">
                <select
                    value={formData.language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="w-full bg-dark-input text-white border-transparent rounded-lg py-4 px-4 focus:ring-primary focus:border-primary appearance-none"
                >
                    <option value="" disabled>
                        {t("Select a language")}
                    </option>
                    {languages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-auto pt-12 pb-8 w-full">
                <PrimaryButton
                    onClick={handleNext}
                    disabled={!formData.language}
                >
                    {t("Next")}
                </PrimaryButton>
            </div>
        </OnboardingLayout>
    );
}
