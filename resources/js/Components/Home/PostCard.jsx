import React from "react";
import { FaHeart, FaBookmark, FaPaperPlane, FaCheck, FaEllipsisV } from "react-icons/fa6";

export default function PostCard({
    profileImage = "/storage/images/user-background.png",
    name = "Mariano",
    username = "@mariano12",
    isVerified = true,
    timeAgo = "1h",
    postImage,
    likes = "1K",
    caption = "",
    hashtags = [],
    onLike,
    onBookmark,
    onTip,
    onShare,
    onBuy,
    onMore,
}) {
    return (
        <div className="bg-dark-card rounded-lg overflow-hidden mb-4 mx-4">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={profileImage}
                        alt={name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{name}</span>
                            {isVerified && (
                                <FaCheck className="text-primary text-sm" />
                            )}
                        </div>
                        <span className="text-white/60 text-xs">{username}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white/60 text-xs">{timeAgo}</span>
                    <button
                        onClick={onMore}
                        className="text-white/60 hover:text-white"
                    >
                        <FaEllipsisV />
                    </button>
                </div>
            </div>

            {/* Post Image */}
            {postImage && (
                <div className="w-full aspect-square bg-dark-input">
                    <img
                        src={postImage}
                        alt="Post"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Interaction Bar */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onLike}
                        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                    >
                        <FaHeart className="text-xl" />
                        <span className="text-sm">{likes}</span>
                    </button>
                    <button
                        onClick={onBookmark}
                        className="text-white hover:text-primary transition-colors"
                    >
                        <FaBookmark className="text-xl" />
                    </button>
                    <button
                        onClick={onTip}
                        className="bg-dark-input text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-dark-card transition-colors flex items-center gap-1"
                    >
                        <span>$</span>
                        <span>Tip</span>
                    </button>
                    <button
                        onClick={onShare}
                        className="text-white hover:text-primary transition-colors"
                    >
                        <FaPaperPlane className="text-xl" />
                    </button>
                </div>
                <button
                    onClick={onBuy}
                    className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors"
                >
                    Comprar
                </button>
            </div>

            {/* Caption and Hashtags */}
            {(caption || hashtags.length > 0) && (
                <div className="px-4 pb-4">
                    {caption && (
                        <p className="text-white mb-2">{caption}</p>
                    )}
                    {hashtags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {hashtags.map((tag, index) => (
                                <span key={index} className="text-primary text-sm">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

