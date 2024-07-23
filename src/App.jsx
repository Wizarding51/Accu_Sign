import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";
import Trip from "./pages/Trip";
import Client1 from "./pages/Client1";
import DocumentUploaded from "./pages/DocumentUploaded";
import Aircraft from "./pages/Aircraft";
import BankDetail from "./pages/BankDetail";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/client":
        title = "";
        metaDescription = "";
        break;
      case "/trip":
        title = "";
        metaDescription = "";
        break;
      case "/crew":
        title = "";
        metaDescription = "";
        break;
      case "/document-uploaded":
        title = "";
        metaDescription = "";
        break;
      case "/aircraft":
        title = "";
        metaDescription = "";
        break;
      case "/client2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/client" element={<Client />} />
      <Route path="/trip" element={<Trip />} />
      <Route path="/client1" element={<Client1 />} />
      <Route path="/document-uploaded" element={<DocumentUploaded />} />
      <Route path="/aircraft" element={<Aircraft />} />
      <Route path="/client2" element={<BankDetail />} />
    </Routes>
  );
}
export default App;
