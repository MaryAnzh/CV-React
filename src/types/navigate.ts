import { ReactNode } from "react";

export type AppRoutesType = {
    name: string;
    path: string;
    element: ReactNode;
    childrenRoutes?: AppRoutesType;
}[];