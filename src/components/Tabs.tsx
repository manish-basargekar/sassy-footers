import { useEffect, useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

const Tabs = ({ tabs, defaultTab, className = "" }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id || ""
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");

    if (tabParam && tabs.find((tab) => tab.id === tabParam)) {
      setActiveTab(tabParam);
    } else if (defaultTab && tabs.find((tab) => tab.id === defaultTab)) {
      setActiveTab(defaultTab);
    } else if (tabs.length > 0) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs, defaultTab]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    const url = new URL(window.location.href);
    url.searchParams.set("tab", tabId);
    window.history.pushState({}, "", url.toString());
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={`tabs-container ${className}`}>
      <div className="flex border-b border-gray-200 mb-4 fixed top-0 left-0 right-0 z-10 justify-between items-center">
        <div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-[#FF4F0F] border-b-2 border-[#FF4F0F] bg-[#ff4f0f1b]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-x-2 items-center px-4">
          <a
            href="https://github.com/madebymanish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 hover:bg-gray-50 px-4 py-2"
          >
            Github
          </a>
          <a
            href="https://x.com/madebymanish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-gray-700 hover:bg-gray-50 "
          >
            @madebymanish
          </a>
        </div>
      </div>

      <div className="tab-content">{activeTabContent}</div>
    </div>
  );
};

export default Tabs;
