import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";

export default function Step05Password() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

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
        <OnboardingLayout title={t("Password")}>
            <Head title={t("Password")} />

            <form onSubmit={handleNext} className="flex flex-col h-full mt-6">
                <TextInput
                    type="password"
                    placeholder={t("Minimum 8 characters")}
                    value={formData.password}
                    onChange={handleChange}
                    autoFocus
                    required
                />

                <ul className="mt-6 space-y-2 text-sm text-text-muted">
                    <li className="flex items-center gap-2">
                        <span
                            className={
                                formData.password.length >= 8
                                    ? "text-green-500"
                                    : "text-gray-600"
                            }
                        >
                            ●
                        </span>
                        {t("Minimum 8 characters")}
                    </li>
                    <li className="flex items-center gap-2">
                        <span
                            className={
                                /[A-Z]/.test(formData.password)
                                    ? "text-green-500"
                                    : "text-gray-600"
                            }
                        >
                            ●
                        </span>
                        {t("At least one uppercase letter")}
                    </li>
                    <li className="flex items-center gap-2">
                        <span
                            className={
                                /[0-9]/.test(formData.password)
                                    ? "text-green-500"
                                    : "text-gray-600"
                            }
                        >
                            ●
                        </span>
                        {t("At least one number")}
                    </li>
                </ul>

                <div className="mt-auto pt-8">
                    <PrimaryButton type="submit" disabled={!isPasswordValid}>
                        {t("Next")}
                    </PrimaryButton>
                </div>
            </form>
        </OnboardingLayout>
    );
}
