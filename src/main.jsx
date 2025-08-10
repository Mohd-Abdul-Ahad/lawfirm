import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import HomePage from "./pages/HomePage.jsx";
import IADPage from "./servicespages/IADPage.jsx";
import InadmissibilityLanding from "./pages/InadmissibilityLanding.jsx";
import RPDPage from "./servicespages/RPDPage.jsx";
import PRRAPage from "./servicespages/inadmissibility/PRRAPage.jsx";
import FederalCourtAppeals from "./servicespages/FederalCourtAppeals.jsx";
import ExpressEntryPage from "./servicespages/ExpressEntryPage.jsx";
import FamilySponsorshipPage from "./servicespages/FamilySponsorshipPage.jsx";
import BusinessImmigrationPage from "./servicespages/BusinessImmigrationPage.jsx";
import PNPPage from "./servicespages/PNPPage.jsx";
import CaregiverImmigration from "./servicespages/inadmissibility/CaregiverImmigration.jsx"
import HumanitarianAndCompassionate from "./servicespages/HumanitarianAndCompassionate.jsx"
import StudyPermit from "./servicespages/StudyPermit.jsx"
import WorkPermit from "./servicespages/WorkPermit.jsx"
import VisitorVisa from "./servicespages/VisitorVisa.jsx"
import SuperVisa from "./servicespages/SuperVisa.jsx"
import ARCPage from "./servicespages/inadmissibility/ARCPage.jsx";
import CriminalInadmissibility from "./servicespages/inadmissibility/CriminalInadmissibility.jsx";
import FinancialInadmissibility from "./servicespages/inadmissibility/FinancialInadmissibility.jsx"
import Misrepresentation from "./servicespages/inadmissibility/Misrepresentation.jsx";
import MedicalInadmissibility from "./servicespages/inadmissibility/MedicalInadmissibility.jsx"
import RemovalOrders from "./servicespages/inadmissibility/RemovalOrders.jsx";
import SecurityInadmissibility from "./servicespages/inadmissibility/SecurityInadmissibility.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/inadmissibilitylanding",
    element: <InadmissibilityLanding />,
  },
  {
    path: "/arcp",
    element: <ARCPage/>
  },
  {
    path: "/criminal-inadmissibility",
    element: <CriminalInadmissibility/>
  },
  {
    path: "/financial-inadmissibility",
    element: <FinancialInadmissibility/>,
  },
  {
    path: "/prra",
    element: <PRRAPage/>,
  },
  {
    path: "/misrepresentation",
    element: <Misrepresentation/>,
  },
  {
    path: "/medical-inadmissibility",
    element: <MedicalInadmissibility/>,
  },
  {
    path: "/removal-orders",
    element: <RemovalOrders/>,
  },
  {
    path: "/security-inadmissibility",
    element: <SecurityInadmissibility/>,
  },
  {
    path: "/immigration-appeals",
    element: <IADPage/>,
  },
  {
    path: "/refugee-protection",
    element: <RPDPage/>,
  },
  {
    path: "/prra",
    element: <PRRAPage/>,
  },
  {
    path: "/judicial-review",
    element: <FederalCourtAppeals/>,
  },
  {
    path: "/express-entry",
    element: <ExpressEntryPage/>,
  },
  {
    path: "/family-sponsorship",
    element: <FamilySponsorshipPage/>,
  },
  {
    path: "/business-immigration",
    element: <BusinessImmigrationPage/>,
  },
  {
    path: "/pnp",
    element: <PNPPage/>,
  },
  {
    path: "/hc-applications",
    element: <HumanitarianAndCompassionate />,
  },
  {
    path: "/study-permit",
    element: <StudyPermit />,
  },
  {
    path: "/work-permits",
    element: <WorkPermit />,
  },
  {
    path: "/visitor-visa",
    element: <VisitorVisa />,
  },
  {
    path: "/super-visa",
    element: <SuperVisa />,
  },
  {
    path: "/caregiver-program",
    element: <CaregiverImmigration />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy/>,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
