import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, children }) {
  {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="about">
        <div className="collapse">
          <h2 className="collapse-title">{title}</h2>
          <span onClick={toggleCollapse} className="chevron-down">
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </span>
        </div>

        {isOpen && <div className="collapse-child">{children}</div>}
      </div>
    );
  }
}

export default Collapse;
