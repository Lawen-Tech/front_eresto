import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index('./pages/Home/Home.tsx'),

    route('admin', './pages/Admin/AdminLayout.tsx', [
        index('./pages/Admin/Dashboard/page.tsx'),
        route("tables", "./pages/Admin/Tables/page.tsx"),
        route("orders", "./pages/Admin/Orders/page.tsx"),
        route('categories', './pages/Admin/Categories/page.tsx'),
        route("payment-history", "./pages/Admin/PaymentHistory/page.tsx"),
        route("products", "./pages/Admin/Products/page.tsx"),
        route("users", "./pages/Admin/Users/page.tsx"),





    ]),
//     // route("admin", "./pages/Admin/Admin.tsx"),
//     // route("users", "./pages/Admin/Users/page.tsx"),
] satisfies RouteConfig;