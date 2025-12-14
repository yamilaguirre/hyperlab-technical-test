import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import StepActions from "@/Components/Onboarding/StepActions";
import StepDescription from "@/Components/Onboarding/StepDescription";
import SelectInput from "@/Components/Onboarding/SelectInput";

export default function Step12Country() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    // Lista simplificada de países para el ejemplo. En producción, usarías una librería.
    const countries = [
        { code: "ES", name: "España" },
        { code: "US", name: "United States" },
        { code: "FR", name: "France" },
        { code: "MX", name: "México" },
        { code: "AR", name: "Argentina" },
        { code: "CO", name: "Colombia" },
        { code: "CL", name: "Chile" },
    ];
    // Se mapea la lista para que la traducción funcione si se añade la clave 'España', 'France', etc.
    const translatedCountries = countries.map((c) => ({
        code: c.code,
        name: t(c.name),
    }));

    const handleNext = () => {
        if (formData.country) {
            nextStep();
            router.visit(route("onboarding.step", 13)); // <<--- NAVEGA A PASO 13 (FINAL)
        }
    };

    const handleSkip = () => {
        nextStep();
        router.visit(route("onboarding.step", 13));
    };

    return (
        <OnboardingLayout title={t("¿Deseas bloquear algún país?")}>
            <Head title={t("¿Deseas bloquear algún país?")} />

            <div className="flex flex-col flex-grow w-full mt-6">
                <SelectInput
                    value={formData.country || ""}
                    onChange={(e) =>
                        updateFormData({ country: e.target.value })
                    }
                    options={translatedCountries.map((c) => ({
                        value: c.code,
                        label: c.name,
                    }))}
                    placeholder={t("Select your country of residence")}
                    icon={FaMagnifyingGlass}
                    required
                />

                <StepActions
                    onNext={handleNext}
                    onSkip={handleSkip}
                    showSkip={true}
                    disabled={!formData.country}
                />
            </div>
        </OnboardingLayout>
    );
}
