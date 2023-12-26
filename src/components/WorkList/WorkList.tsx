import {
  FIPS_URL,
  MOCK_API_HUB_URL,
  SPRING_BOOT_REACT_TRACK_PLAYER_URL,
} from "@/data/constants";
import "@egjs/flicking/dist/flicking.css";
import Flicking from "@egjs/react-flicking";
import Certificate from "@/assets/certificate.svg";
import MockApiHub from "@/assets/mock-api-hub.svg";
import SpringBootReactTrackPlayer from "@/assets/spring-boot-react-track-player.svg";
import "./WorkList.css";

interface WorkPanel {
  link: string;
  image: string;
  color: string;
}

const panels: WorkPanel[] = [
  { color: "#f14668", image: Certificate, link: FIPS_URL },
  { color: "#3e8ed0", image: MockApiHub, link: MOCK_API_HUB_URL },
  {
    color: "#48c78e",
    image: SpringBootReactTrackPlayer,
    link: SPRING_BOOT_REACT_TRACK_PLAYER_URL,
  },
];

export function WorkList() {
  return (
    <div id="works" className="pt-2">
      <div className="text-center justify-content-center my-5">
        <div className="w-100">
          <h2 className="font-weight-bold">My Works</h2>
          <p className="text-muted">The projects that I developed</p>
        </div>
      </div>
      <div>
        <Flicking renderOnlyVisible={true} circular={true}>
          {panels.map((panel, index) => (
            <div
              className="flicking-panel"
              key={index}
              style={{ backgroundColor: panel.color }}
            >
              <img src={panel.image} />
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
    </div>
  );
}
