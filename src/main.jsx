import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </QueryClientProvider>
    </AuthProvider>
);
