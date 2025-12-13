import React, { createContext, useContext, useState, useMemo } from "react";

const OnboardingContext = createContext(null);

const TOTAL_STEPS = 13;

export const OnboardingProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        role: "",
        email: "",
        password: "",
        fullName: "",
        username: "",
        birthDate: "",
        gender: "",
        language: "",
        description: "",
        categories: [],
        socials: {},
        profileImage: null,
        blockedCountries: [],
    });

    const nextStep = () => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const goToStep = (stepNumber) => {
        if (stepNumber >= 1 && stepNumber <= TOTAL_STEPS) {
            setCurrentStep(stepNumber);
        }
    };

    const updateFormData = (newData) => {
        setFormData((prev) => ({
            ...prev,
            ...newData,
        }));
    };

    const value = useMemo(
        () => ({
            currentStep,
            totalSteps: TOTAL_STEPS,
            formData,
            nextStep,
            prevStep,
            goToStep,
            updateFormData,
            progressPercentage: (currentStep / TOTAL_STEPS) * 100,
        }),
        [currentStep, formData]
    );

    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    );
};

export const useOnboarding = () => {
    const context = useContext(OnboardingContext);
    if (!context) {
        throw new Error(
            "useOnboarding must be used within an OnboardingProvider"
        );
    }
    return context;
};
