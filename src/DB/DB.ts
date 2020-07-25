import { EStatus } from "./Interface";

const DB = {
    tabs: [
        { id: "t1", title: "Games" },
        { id: "t2", title: "Categories" },
        { id: "t3", title: "Types" },
        { id: "t4", title: "Providers" }
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
        { id: "s1", title: EStatus.ACTIVE },
        { id: "s2", title: EStatus.DISABLE }
    ],

    // these are four arrays for our four tab
    gamesTabItems: [
        { id: "gt1", title: "game tab 1" },
        { id: "gt2", title: "game tab 2" },
        { id: "gt3", title: "game tab 3" },
        { id: "gt4", title: "game tab 4" },
        { id: "gt5", title: "game tab 5" },
    ],
    categoryTabItems: [
        { id: "ct1", title: "category tab 1" },
        { id: "ct2", title: "category tab 2" },
        { id: "ct3", title: "category tab 3" },
        { id: "ct4", title: "category tab 4" },
        { id: "ct5", title: "category tab 5" },
    ],
    typeTabItems: [
        { id: "tt1", title: "type tab 1" },
        { id: "tt2", title: "type tab 2" },
        { id: "tt3", title: "type tab 3" },
        { id: "tt4", title: "type tab 4" },
        { id: "tt5", title: "type tab 5" },
    ],
    providerTabItems: [
        { id: "pt1", title: "provider tab 1" },
        { id: "pt2", title: "provider tab 2" },
        { id: "pt3", title: "provider tab 3" },
        { id: "pt4", title: "provider tab 4" },
        { id: "pt5", title: "provider tab 5" },
    ]
};

export default DB;