
import React, { useEffect, useState } from "react";
import Inventory from "./modules/Inventory";
import Finance from "./modules/Finance";
import Sales from "./modules/Sales";
import Marketplace from "./modules/Marketplace";
import Reports from "./modules/Reports";
import Counterparties from "./modules/Counterparties";
import Settings from "./modules/Settings";

export default function App() {
  const [session, setSession] = useState(null);
  const [tab, setTab] = useState("inventory");

  useEffect(() => {
    const saved = localStorage.getItem("session");
    if (saved) setSession(JSON.parse(saved));
  }, []);

  if (!session || !session.loggedIn) {
    return <Settings />;
  }

  const role = session.user.role;
  const access = {
    Администратор: ["inventory", "sales", "finance", "marketplace", "reports", "counterparties", "settings"],
    Менеджер:      ["inventory", "sales", "finance", "marketplace", "reports", "counterparties"],
    Кладовщик:     ["inventory", "sales", "counterparties"]
  };
  const visibleTabs = access[role] || [];

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
      <p>Пользователь: <strong>{session.user.name}</strong> ({session.user.role})</p>
      <div className="flex flex-wrap gap-2 my-2">
        {visibleTabs.map(key => (
          <button key={key} onClick={() => setTab(key)} className="px-4 py-1 bg-gray-200 rounded">
            {key}
          </button>
        ))}
      </div>
      {renderTab()}
    </div>
  );
}
