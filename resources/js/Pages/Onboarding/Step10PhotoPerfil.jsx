import React, { useState, useRef } from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import { FaPlus } from "react-icons/fa6";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";

export default function Step10PhotoPerfil() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();
    const fileInputRef = useRef(null);

    // Usa el estado local para la previsualización de la imagen
    const [previewUrl, setPreviewUrl] = useState(
        formData.profilePhotoPreview || null
    );

    const handleFileChange = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
                // Almacenamos el blob/archivo para su posterior envío
                updateFormData({
                    profilePhoto: file,
                    profilePhotoPreview: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        handleFileChange(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleNext = () => {
        // Se puede avanzar si hay una foto o si el usuario quiere omitir (si profilePhoto es opcional)
        // Por ahora, lo haremos obligatorio para un mejor perfil
        if (formData.profilePhoto) {
            nextStep();
            router.visit(route("onboarding.step", 11)); // <<--- NAVEGA A PASO 11
        }
    };

    return (
        <OnboardingLayout title={t("Fotos de Perfil")}>
            <Head title={t("Fotos de Perfil")} />

            <div className="flex flex-col items-center flex-grow w-full mt-10">
                <div className="relative">
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={() => fileInputRef.current.click()}
                        className={`w-48 h-48 rounded-full border-4 border-dashed cursor-pointer transition-all flex items-center justify-center overflow-hidden relative
                                    ${
                                        previewUrl
                                            ? "border-primary/50"
                                            : "border-white/20 hover:border-primary"
                                    }`}
                    >
                        {previewUrl ? (
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <img
                                src="/storage/images/user-background.png"
                                alt="User background"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div
                        onClick={() => fileInputRef.current.click()}
                        className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-hover transition-colors shadow-lg border-4 border-dark-bg"
                    >
                        <FaPlus className="text-white text-xl" />
                    </div>
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFileChange(e.target.files[0])}
                    accept="image/*"
                    className="hidden"
                />

                <StepDescription className="mt-8">
                    {t("Upload a photo")}
                </StepDescription>

                <StepActions
                    onNext={handleNext}
                    disabled={!formData.profilePhoto}
                />
            </div>
        </OnboardingLayout>
    );
}
