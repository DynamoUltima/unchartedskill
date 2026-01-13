import SectionGrid from "./SectionGrid";

const OUTDOOR_ITEMS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1974&auto=format&fit=crop",
        category: "ADVENTURE",
        author: "ALEX HONNOLD",
        title: "Rock Climbing Essentials"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop",
        category: "SURVIVAL",
        author: "BEAR GRYLLS",
        title: "Wilderness Survival"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
        category: "PHOTOGRAPHY",
        author: "JIMMY CHIN",
        title: "Adventure Photography"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d4791?q=80&w=2070&auto=format&fit=crop",
        category: "FITNESS",
        author: "LAIRD HAMILTON",
        title: "High Performance Surfing"
    }
];

export default function OutdoorSection() {
    return (
        <SectionGrid
            title="Explore the Great Outdoors"
            subtitle="ADVENTURES & EVENTS"
            items={OUTDOOR_ITEMS}
        />
    );
}
