export default {
    path: "/cinema/:cinemaId",
    name: "cinemaDetail",
    component: () => import("@/views/cinema/cinemadetail"),
};