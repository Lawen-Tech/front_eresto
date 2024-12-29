import { type RouteConfig, route,  index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("admin", "./pages/Admin/Admin.tsx"),
    route("categories", "./pages/Admin/Categories/Categories.tsx"),
    route("orders", "./pages/Admin/Orders/Orders.tsx"),
    route("payment-history", "./pages/Admin/PaymentHistory/PaymentHistory.tsx"),
    route("products", "./pages/Admin/Products/Products.tsx"),
    route("tables", "./pages/Admin/Tables/Tables.tsx"),
    route("users", "./pages/Admin/Users/Users.tsx"),

] satisfies RouteConfig;


