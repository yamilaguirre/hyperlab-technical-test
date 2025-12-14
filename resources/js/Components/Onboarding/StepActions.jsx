import React from "react";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import useTranslation from "@/Hooks/useTranslation";

export default function StepActions({
    onNext,
    onSkip,
    disabled = false,
    nextLabel = null,
    showSkip = false,
    className = "",
    useFormSubmit = false, // Si es true, usa type="submit" en lugar de onClick
}) {
    const { t } = useTranslation();

    return (
        <div className={`mt-auto pt-12 pb-8 w-full ${className}`}>
            {showSkip && (
                <button
                    type="button"
                    onClick={onSkip}
                    className="text-white/60 hover:text-white text-sm mb-4 transition-colors mx-auto block"
                >
                    {t("Skip this step")}
                </button>
            )}
            {useFormSubmit ? (
                <PrimaryButton type="submit" disabled={disabled}>
                    {nextLabel || t("Next")}
                </PrimaryButton>
            ) : (
                <PrimaryButton onClick={onNext} disabled={disabled}>
                    {nextLabel || t("Next")}
                </PrimaryButton>
            )}
        </div>
    );
}

