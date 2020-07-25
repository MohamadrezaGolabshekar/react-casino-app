import { EStatus, ETabs } from "./Interface";

const DB = {
    tabs: [
        { id: ETabs.GAMES_TAB_ITEMS, title: "Games" },
        { id: ETabs.CATEGORY_TAB_ITEMS, title: "Categories" },
        { id: ETabs.TYPE_TAB_ITEMS, title: "Types" },
        { id: ETabs.PROVIDER_TAB_ITEMS, title: "Providers" }
    ],
    providers: [
        { id: "p1", title: "provider 1" },
        { id: "p2", title: "provider 2" },
        { id: "p3", title: "provider 3" },
        { id: "p4", title: "provider 4" },
        { id: "p5", title: "provider 5" },
        { id: "p6", title: "provider 6" },
    ],
    categories: [
        { id: "c1", title: "category 1" },
        { id: "c2", title: "category 2" },
        { id: "c3", title: "category 3" },
        { id: "c4", title: "category 4" },
        { id: "c5", title: "category 5" },
        { id: "c6", title: "category 6" },
    ],
    statuses: [
        { id: "s1", title: EStatus.ACTIVE as string },
        { id: "s2", title: EStatus.DISABLE as string }
    ],

    // these are four arrays for our four tab
    gamesTabItems: [
        { id: "gt1", title: "Fashion (game tab)" },
        { id: "gt2", title: "Club (game tab)" },
        { id: "gt3", title: "Blackjack (game tab)" },
        { id: "gt4", title: "Bikini angels (game tab)" },
        { id: "gt5", title: "Fruits (game tab)" },
    ],
    categoryTabItems: [
        { id: "ct1", title: "Club (category tab)" },
        { id: "ct2", title: "Blackjack (category tab)" },
        { id: "ct3", title: "Fashion (category tab)" },
        { id: "ct4", title: "Bikini angels (category tab)" },
        { id: "ct5", title: "Fruits (category tab)" },
    ],
    typeTabItems: [
        { id: "tt1", title: "Bikini angels (type tab)" },
        { id: "tt2", title: "Fruits (type tab)" },
        { id: "tt3", title: "Blackjack (type tab)" },
        { id: "tt4", title: "Fashion (type tab)" },
        { id: "tt5", title: "Club (type tab)" },
    ],
    providerTabItems: [
        { id: "pt1", title: "Fruits (provider tab)" },
        { id: "pt2", title: "Club (provider tab)" },
        { id: "pt3", title: "Fruits (provider tab)" },
        { id: "pt4", title: "Blackjack (provider tab)" },
        { id: "pt5", title: "Bikini angels (provider tab)" },
    ]
};

export default DB;