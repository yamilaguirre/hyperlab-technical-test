import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import ValidationList from "@/Components/Onboarding/ValidationList";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Step05Password() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => updateFormData({ password: e.target.value });

    const handleNext = (e) => {
        e.preventDefault();
        if (formData.password && formData.password.length >= 8) {
            nextStep();
            router.visit(route("onboarding.step", 6));
        }
    };

    const isPasswordValid =
        formData.password.length >= 8 &&
        /[A-Z]/.test(formData.password) &&
        /[0-9]/.test(formData.password);

    return (
        <OnboardingLayout title={t("Crea tu contraseña")}>
            <Head title={t("Crea tu contraseña")} />

            <form onSubmit={handleNext} className="flex flex-col h-full mt-6">
                <div className="relative">
                    <TextInput
                        type={showPassword ? "text" : "password"}
                        placeholder={t("Minimum 8 characters")}
                        value={formData.password}
                        onChange={handleChange}
                        autoFocus
                        required
                        className="pr-12"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                    >
                        {showPassword ? (
                            <FaEyeSlash className="text-xl" />
                        ) : (
                            <FaEye className="text-xl" />
                        )}
                    </button>
                </div>

                <ValidationList
                    validations={[
                        {
                            isValid: formData.password.length >= 8,
                            label: t("Minimum 8 characters"),
                        },
                        {
                            isValid: /[A-Z]/.test(formData.password),
                            label: t("At least one uppercase letter"),
                        },
                        {
                            isValid: /[0-9]/.test(formData.password),
                            label: t("At least one number"),
                        },
                    ]}
                />

                <StepActions
                    onNext={handleNext}
                    disabled={!isPasswordValid}
                    className="pt-8"
                    useFormSubmit={true}
                />
            </form>
        </OnboardingLayout>
    );
}
