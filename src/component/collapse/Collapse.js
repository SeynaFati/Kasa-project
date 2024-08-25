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
          <span
            onClick={toggleCollapse}
            className={isOpen ? "" : "chevronOpen"}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>

        <div className={isOpen ? "collapse-child open" : "collapse-child"}>
          {children}
        </div>
      </div>
    );
  }
}

export default Collapse;
