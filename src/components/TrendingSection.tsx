import Link from "next/link";
import SectionGrid from "./SectionGrid";

const TRENDING_ITEMS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        category: "BUSINESS",
        author: "MARCUS STERLING",
        title: "Strategic Thinking for CEOs"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        category: "WRITING",
        author: "ARTHUR WEST",
        title: "The Art of Storytelling"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop",
        category: "CULINARY",
        author: "ELENA ROSTOVA",
        title: "Modern Italian Cooking"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        category: "DESIGN",
        author: "SARAH CHEN",
        title: "Interior Design Principles"
    }
];

export default function TrendingSection() {
    return (
        <SectionGrid
            title="Top Classes This Week"
            subtitle="TRENDING NOW"
            items={TRENDING_ITEMS}
        />
    );
}
