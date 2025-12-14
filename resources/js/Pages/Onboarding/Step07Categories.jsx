import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

export default function Step07Categories() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();
    const MAX_CATEGORIES = 5;

    const availableCategories = [
        "Art & Design",
        "Fitness & Sports",
        "Finance & Investing",
        "Travel & Vlogs",
        "Technology & Gaming",
        "Music",
        "Cooking",
        "Fashion",
    ];

    const selectedCategories = formData.categories || [];

    const toggleCategory = (category) => {
        const isSelected = selectedCategories.includes(category);
        let newCategories;

        if (isSelected) {
            newCategories = selectedCategories.filter((c) => c !== category);
        } else if (selectedCategories.length < MAX_CATEGORIES) {
            newCategories = [...selectedCategories, category];
        } else {
            newCategories = selectedCategories;
        }

        updateFormData({ categories: newCategories });
    };

    const handleNext = () => {
        if (selectedCategories.length > 0) {
            nextStep();
            router.visit(route("onboarding.step", 8));
        }
    };

    return (
        <OnboardingLayout title={t("Categories")}>
            <Head title={t("Categories")} />

            <p className="text-white/80 text-sm mb-4">
                {t("Choose your main interests")}
            </p>
            <p className="text-primary text-xs mb-8">
                {t("You can select up to 5 categories.")}
            </p>

            <div className="flex flex-wrap gap-3">
                {availableCategories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    const isDisabled =
                        !isSelected &&
                        selectedCategories.length >= MAX_CATEGORIES;

                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => toggleCategory(category)}
                            disabled={isDisabled}
                            className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${
                                isSelected
                                    ? "border-primary bg-primary text-white"
                                    : isDisabled
                                    ? "border-white/10 bg-dark-card text-white/50 cursor-not-allowed"
                                    : "border-white/20 bg-dark-card text-white hover:bg-white/10"
                            }`}
                        >
                            {t(category)}
                        </button>
                    );
                })}
            </div>

            <div className="mt-auto pt-12 pb-8 w-full">
                <PrimaryButton
                    onClick={handleNext}
                    disabled={selectedCategories.length === 0}
                >
                    {t("Next")}
                </PrimaryButton>
            </div>
        </OnboardingLayout>
    );
}
