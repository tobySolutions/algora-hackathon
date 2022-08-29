import React from "react";
import Logo from '../../Assets/logo.svg'

function MembersContainer() {
  return (
      <main>
          {/* This container is supposed to hold meeting participants' video feed*/}
      <div className="wrapper bg-[#1C1F2E]">
        <section className="speaker-section container">
          <img src={Logo} alt="speaker-photo" />
        </section>
        <section className="member-section">
            
        </section>
      </div>
    </main>
  );
}

export default MembersContainer;
