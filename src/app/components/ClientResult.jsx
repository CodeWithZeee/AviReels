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
      <ClientCard />
    </div>
  );
};

export default ClientResult;
