import { FIPS_URL } from "@/data/constants";
import "@egjs/flicking/dist/flicking.css";
import Flicking from "@egjs/react-flicking";

interface Work {
  link: string;
  image: string;
  color: string;
}

const panels: Work[] = [
  { color: "#f14668", image: FIPS_URL, link: FIPS_URL },
  { color: "#3e8ed0", image: FIPS_URL, link: "" },
  { color: "#48c78e", image: FIPS_URL, link: "" },
];

export function Works() {
  return (
    <div id="works" className="pt-2 vh-100">
      <div className="text-center justify-content-center my-5">
        <div className="w-100">
          <h2 className="font-weight-bold">My Works</h2>
          <p className="text-muted">The projects that I developed</p>
        </div>
      </div>
      <Flicking renderOnlyVisible={true} circular={true}>
        {panels.map((panel, index) => (
          <div
            className="flicking-panel"
            style={{ backgroundColor: panel.color }}
          >
            <a
              href={panel.link}
              className="flicking-index text-decoration-none"
            >
              {index + 1}
            </a>
          </div>
        ))}
      </Flicking>
    </div>
  );
}