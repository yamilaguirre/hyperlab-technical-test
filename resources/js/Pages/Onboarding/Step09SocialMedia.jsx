import React from "react";
import { Head, router } from "@inertiajs/react";
import OnboardingLayout from "@/Layouts/OnboardingLayout";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { useOnboarding } from "@/Contexts/OnboardingContext";
import useTranslation from "@/Hooks/useTranslation";
import {
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaYoutube,
    FaReddit,
} from "react-icons/fa6";

export default function Step09SocialMedia() {
    const { formData, updateFormData, nextStep } = useOnboarding();
    const { t } = useTranslation();

    const platforms = [
        {
            key: "instagram",
            label: "Instagram",
            icon: FaInstagram,
            placeholder: "https://www.instagram.com/username",
        },
        {
            key: "tiktok",
            label: "TikTok",
            icon: FaTiktok,
            placeholder: "https://www.tiktok.com/@username",
        },
        {
            key: "twitter",
            label: "Twitter",
            icon: FaTwitter,
            placeholder: "https://www.x.com/username",
        },
        {
            key: "youtube",
            label: "YouTube",
            icon: FaYoutube,
            placeholder: "https://www.youtube.com/@username",
        },
        {
            key: "reddit",
            label: "Reddit",
            icon: FaReddit,
            placeholder: "https://www.reddit.com/user/username",
        },
    ];

    const socialLinks = formData.socials || {};

    const handleUpdateSocial = (platform, value) => {
        updateFormData({
            socials: {
                ...socialLinks,
                [platform]: value,
            },
        });
    };

    const handleNext = (e) => {
        e.preventDefault();
        nextStep();
        router.visit(route("onboarding.step", 10));
    };

    return (
        <OnboardingLayout title={t("Social Media")}>
            <Head title={t("Social Media")} />

            <p className="text-white/80 text-sm mb-6">
                {t("Add your social media profiles (optional)")}
            </p>

            <form onSubmit={handleNext} className="flex flex-col h-full w-full">
                <div className="space-y-4 flex-grow overflow-y-auto">
                    {platforms.map((platform) => (
                        <div key={platform.key} className="relative">
                            <TextInput
                                type="url"
                                placeholder={platform.placeholder}
                                value={socialLinks[platform.key] || ""}
                                onChange={(e) =>
                                    handleUpdateSocial(
                                        platform.key,
                                        e.target.value
                                    )
                                }
                                className="py-4 bg-dark-input pr-12"
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-primary">
                                <platform.icon size={24} />
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-12 pb-8 w-full">
                    <button
                        type="button"
                        onClick={handleNext}
                        className="text-white/60 hover:text-white text-sm mb-4 transition-colors mx-auto block"
                    >
                        {t("Skip this step")}
                    </button>
                    <PrimaryButton type="submit">{t("Next")}</PrimaryButton>
                </div>
            </form>
        </OnboardingLayout>
    );
}
