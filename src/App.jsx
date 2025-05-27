import React, { useState } from "react";
import Inventory from "./modules/Inventory";
import Finance from "./modules/Finance";
import Sales from "./modules/Sales";
import Marketplace from "./modules/Marketplace";
import Reports from "./modules/Reports";
import Counterparties from "./modules/Counterparties";
import Settings from "./modules/Settings";

export default function App() {
  const [tab, setTab] = useState("inventory");

  const tabs = [
    "inventory",
    "sales",
    "finance",
    "marketplace",
    "reports",
    "counterparties",
    "settings"
  ];

  const renderTab = () => {
    switch(tab) {
      case "inventory": return <Inventory />;
      case "sales": return <Sales />;
      case "finance": return <Finance />;
      case "marketplace": return <Marketplace />;
      case "reports": return <Reports />;
      case "counterparties": return <Counterparties />;
      case "settings": return <Settings />;
      default: return null;
    }
  };

  return (
    <div className="p-4 space-y-4 font-sans">
      <h1 className="text-2xl font-bold">Учетная система</h1>
      <div className="flex flex-wrap gap-2 my-2">
        {tabs.map(key => (
          <button key={key} onClick={() => setTab(key)} className="px-4 py-1 bg-gray-200 rounded">
            {key}
          </button>
        ))}
      </div>
      {renderTab()}
    </div>
  );
}