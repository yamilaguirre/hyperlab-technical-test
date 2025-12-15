import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import ProfileHeader from "@/Components/Home/ProfileHeader";
import FinancialMetrics from "@/Components/Home/FinancialMetrics";
import TimeBreakdown from "@/Components/Home/TimeBreakdown";
import EarningsChart from "@/Components/Home/EarningsChart";
import SubscriptionCostButton from "@/Components/Home/SubscriptionCostButton";
import UserDescription from "@/Components/Home/UserDescription";
import PostCard from "@/Components/Home/PostCard";

export default function Home() {
    const [activeTab, setActiveTab] = useState("Explorer");

    const userData = {
        profileImage: "/storage/images/user-background.png",
        name: "Yamil Aguirre",
        username: "@yamilaguirre",
        isVerified: true,
        likes: "1K",
        followers: "4K",
        location: "Bolivia",
    };

    const financialData = {
        netEarnings: "$300",
        subscriptions: "1K",
        tips: "$189",
    };

    const timeData = {
        today: "$0",
        thisWeek: "$0",
        thisMonth: "$0",
    };

    const posts = [
        {
            id: 1,
            profileImage: "/storage/images/user-background.png",
            name: "Yamil Aguirre",
            username: "@yamilaguirre",
            isVerified: true,
            timeAgo: "1h",
            postImage: "/storage/images/user-background.png", 
            likes: "1K",
            caption: "Ya escuchaste mi nuevo tema?",
            hashtags: ["abc", "abcd", "abcde"],
        },
    ];

    return (
        <HomeLayout
            balance="$300"
            activeTab={activeTab}
            onTabChange={setActiveTab}
        >
            <Head title="Home" />

            <ProfileHeader
                profileImage={userData.profileImage}
                name={userData.name}
                username={userData.username}
                isVerified={userData.isVerified}
                likes={userData.likes}
                followers={userData.followers}
                location={userData.location}
            />

            <FinancialMetrics
                netEarnings={financialData.netEarnings}
                subscriptions={financialData.subscriptions}
                tips={financialData.tips}
            />

            <TimeBreakdown
                today={timeData.today}
                thisWeek={timeData.thisWeek}
                thisMonth={timeData.thisMonth}
            />

            <EarningsChart />

            <SubscriptionCostButton />

            <UserDescription description="" />

            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    profileImage={post.profileImage}
                    name={post.name}
                    username={post.username}
                    isVerified={post.isVerified}
                    timeAgo={post.timeAgo}
                    postImage={post.postImage}
                    likes={post.likes}
                    caption={post.caption}
                    hashtags={post.hashtags}
                />
            ))}
        </HomeLayout>
    );
}

