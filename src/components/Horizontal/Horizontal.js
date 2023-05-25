import  { useState } from 'react';
import ReactHtmlParser from 'html-react-parser';
import './Horizontal.scss';


const HorizontalTab = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="content">
        {ReactHtmlParser(tabs[activeTab].content)}
      </div>
    </div>
  );
};

export default HorizontalTab;
