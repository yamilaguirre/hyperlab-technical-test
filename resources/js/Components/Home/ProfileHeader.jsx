import React from "react";
import { FaHeart, FaUser, FaLocationPin, FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function ProfileHeader({
    profileImage = "/storage/images/user-background.png",
    name = "Mariano",
    username = "@mariano12",
    isVerified = true,
    likes = "1K",
    followers = "4K",
    location = "Colombia",
    onEditProfile,
}) {
    return (
        <div className="px-4 mb-6">
            {/* Engagement Metrics */}
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-white">
                    <FaHeart className="text-lg" />
                    <span className="text-sm">{likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                    <FaUser className="text-lg" />
                    <span className="text-sm">{followers}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                    <FaLocationPin className="text-lg" />
                    <span className="text-sm">{location}</span>
                </div>
            </div>

            {/* Profile Picture */}
            <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden">
                        <img
                            src={profileImage}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button
                        onClick={onEditProfile}
                        className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors shadow-lg border-2 border-dark-bg"
                    >
                        <FaPlus className="text-white text-xs" />
                    </button>
                </div>

                {/* User Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-white">{name}</h2>
                        {isVerified && (
                            <FaCheck className="text-primary text-lg" />
                        )}
                    </div>
                    <p className="text-white/60 text-sm">{username}</p>
                </div>
            </div>
        </div>
    );
}

