import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";
import CategoryChip from "@/Components/Onboarding/CategoryChip";

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
        <OnboardingLayout title={t("Selecciona tus categorias")}>
            <Head title={t("Selecciona tus categorias")} />

            <StepDescription className="mb-4">
                {t("Choose your main interests")}
            </StepDescription>
            <StepDescription variant="primary">
                {t("You can select up to 5 categories.")}
            </StepDescription>

            <div className="flex flex-wrap gap-3">
                {availableCategories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    const isDisabled =
                        !isSelected &&
                        selectedCategories.length >= MAX_CATEGORIES;

                    return (
                        <CategoryChip
                            key={category}
                            label={t(category)}
                            isSelected={isSelected}
                            isDisabled={isDisabled}
                            onClick={() => toggleCategory(category)}
                        />
                    );
                })}
            </div>

            <StepActions
                onNext={handleNext}
                disabled={selectedCategories.length === 0}
            />
        </OnboardingLayout>
    );
}
