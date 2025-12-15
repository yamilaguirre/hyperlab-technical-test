import React, { useState } from "react";
import { Head, router, useForm } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";

export default function Step13Username() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const MIN_LENGTH = 3;
    const MAX_LENGTH = 20;
    const username = formData.username || "";
    const usernameLength = username.length;

    // Validación básica: solo letras, números y guiones bajos
    const isValidFormat = /^[a-zA-Z0-9_]+$/.test(username);
    const isValidLength =
        usernameLength >= MIN_LENGTH && usernameLength <= MAX_LENGTH;
    const isValid = isValidFormat && isValidLength;

    const handleNext = (e) => {
        e.preventDefault();
        if (isValid && !isSubmitting) {
            setIsSubmitting(true);

            // Preparar los datos para enviar al backend
            const onboardingData = {
                role: formData.role,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password, // Para validación
                full_name: formData.fullName,
                username: formData.username,
                birth_date: formData.birthDate,
                gender: formData.gender || null,
                language: formData.language || null,
                description: formData.description || null,
                categories: formData.categories || [],
                socials: formData.socials || {},
                profile_photo:
                    formData.profilePhotoPreview ||
                    formData.profileImage ||
                    null,
                blocked_countries:
                    formData.blockedCountries || formData.country
                        ? [formData.country]
                        : [],
            };

            // Enviar datos al backend
            router.post(route("onboarding.complete"), onboardingData, {
                onSuccess: () => {
                    // El usuario será redirigido automáticamente al home
                },
                onError: (errors) => {
                    setIsSubmitting(false);
                    console.error("Error al completar onboarding:", errors);
                },
                onFinish: () => {
                    setIsSubmitting(false);
                },
            });
        }
    };

    return (
        <OnboardingLayout title={t("Username")}>
            <Head title={t("Username")} />

            <StepDescription>{t("Choose your username")}</StepDescription>

            <form
                onSubmit={handleNext}
                className="flex flex-col h-full mt-10 w-full"
            >
                <TextInput
                    type="text"
                    placeholder={t("Username Placeholder")}
                    value={username}
                    onChange={(e) => {
                        const value = e.target.value.toLowerCase();
                        if (value.length <= MAX_LENGTH) {
                            updateFormData({ username: value });
                        }
                    }}
                    className="py-4 bg-dark-input"
                    autoFocus
                />

                <div className="mt-4 space-y-2">
                    <p
                        className={`text-xs ${
                            isValidLength ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {t("Username length requirement")}
                    </p>
                    <p
                        className={`text-xs ${
                            isValidFormat || usernameLength === 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {t("Username format requirement")}
                    </p>
                    <p className="text-white/50 text-xs mt-2">
                        {usernameLength} / {MAX_LENGTH}
                    </p>
                </div>

                <StepActions
                    onNext={handleNext}
                    disabled={!isValid || isSubmitting}
                    nextLabel={
                        isSubmitting ? t("Processing...") : t("Complete")
                    }
                    useFormSubmit={true}
                />
            </form>
        </OnboardingLayout>
    );
}
