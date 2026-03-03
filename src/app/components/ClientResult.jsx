import React from "react";
import ClientCard from "./ui/ClientCard";

const ClientResult = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center -mb-2">
        <div className="pill mt-18">Client Result</div>
      </div>
      <ClientCard
        platform="FORGEDFURY: YOUTUBE SHORTS"
        titleLine1="Monetized in 75 Days."
        titleLine2="134 Million Views."
        description="Most channels take 6-12 months to monetize. We did it in under 75 days, then built a machine that kept producing algorithm-dominating content."
        image="/Everybody.Ai.png"
        stats={[
          { value: "134.1M", label: "Views from 10 videos" },
          { value: "70M", label: "Single video views" },
          { value: "75 Days", label: "To monetization" },
          { value: "$1K+/mo", label: "Recurring ad revenue" },
        ]}
      />

      <ClientCard
        platform="AI for Everybody: Instagram Reels"
        titleLine1="7.73 Million Views."
        titleLine2="Zero Ad Spend."
        description="Built from scratch. No paid promotion. Just engineered content that kept going viral — video after video."
        image="/Everybody.Ai.png"
        stats={[
          { value: "7.73M", label: "Views across 6 Reels" },
          { value: "10,500+", label: "Organic followers" },
          { value: "2.6M", label: "Top single Reel" },
          { value: "1:736", label: "View-to-follower ratio" },
        ]}
        reverse
      />

      <ClientCard
        platform="TrueMuslimWarrior: Instagram Threads"
        titleLine1="376,000 Monthly Views."
        titleLine2="30 Days."
        description="We automated and managed their Threads presence entirely. In 30 days: 1,800 new followers, 376K views, and direct eBook sales from organic content alone."
        image="/Everybody.Ai.png"
        stats={[
          { value: "376K", label: "Monthly views in month 1" },
          { value: "+1,800", label: "New followers in 30 days" },
          { value: "60/day", label: "New followers per day" },
          { value: "Direct", label: "eBook revenue generated" },
        ]}
      />

      <ClientCard
        platform="AstrixDigitalMedia: AI Avatar Funnels"
        titleLine1="AI Avatars"
        titleLine2="That Book Calls."
        description="We built AI avatar videos for their landing and sales pages. The result: higher dwell time, stronger trust at first impression, and a measurable increase in booked sales calls."
        image="/Everybody.Ai.png"
        stats={[
          { value: "Calls", label: "Booked from avatar pages" },
          { value: "100%", label: "Repeat client rate" }
        ]}
        reverse
      />
    </div>
  );
};

export default ClientResult;
