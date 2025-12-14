import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import Divider from "@/Components/Onboarding/Divider";

export default function Step04Email() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const handleChange = (e) => updateFormData({ email: e.target.value });

    const handleNext = (e) => {
        e.preventDefault();
        if (formData.email) {
            nextStep();
            router.visit(route("onboarding.step", 5));
        }
    };

    return (
        <OnboardingLayout title={t("Escribe tu correo electronico")}>
            <Head title={t("Escribe tu correo electronico")} />

            <form onSubmit={handleNext} className="flex flex-col h-full mt-6">
                <div className="space-y-4">
                    <TextInput
                        type="email"
                        placeholder={t("Email Placeholder")}
                        value={formData.email}
                        onChange={handleChange}
                        autoFocus
                        required
                    />

                    <Divider />

                    <button
                        type="button"
                        className="w-full bg-white text-black font-medium py-3.5 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                    >
                        {t("Login with Google")}
                    </button>
                </div>

                <StepActions
                    onNext={handleNext}
                    disabled={!formData.email}
                    className="pt-8"
                    useFormSubmit={true}
                />
            </form>
        </OnboardingLayout>
    );
}
