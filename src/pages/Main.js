import InternPopup from "../components/InternPopup";
import IconPagesSection from "../components/IconPagesSection";

function Main() {
  return (
    <div className="Main">
      <section className="main_section_01">
        <div className="main_popup_01">
          <InternPopup />
        </div>
      </section>
      <section className="main_section_02">
        <IconPagesSection />
      </section>
      <section className="main_section_03"></section>
    </div>
  );
}

export default Main;
