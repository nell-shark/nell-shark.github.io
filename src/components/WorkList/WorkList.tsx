import { FIPS_URL, MOCK_API_HUB_URL, TRACK_PLAYER_URL } from "@/constants";
import "@egjs/flicking/dist/flicking.css";
import Flicking from "@egjs/react-flicking";
import Certificate from "@/assets/svg/certificate.svg";
import MockApiHub from "@/assets/svg/mock-api-hub.svg";
import TrackPlayer from "@/assets/svg/track-player.svg";
import "./WorkList.css";
import { useTranslation } from "react-i18next";

interface WorkPanel {
  link: string;
  image: string;
  color: string;
}

const panels: WorkPanel[] = [
  { color: "#f14668", image: Certificate, link: FIPS_URL },
  { color: "#3e8ed0", image: MockApiHub, link: MOCK_API_HUB_URL },
  { color: "#48c78e", image: TrackPlayer, link: TRACK_PLAYER_URL }
];

export function WorkList() {
  const { t } = useTranslation();

  return (
    <div id="works" className="py-2">
      <div className="text-center justify-content-center my-5">
        <h2 className="font-weight-bold">{t("works")}</h2>
        <p className="text-muted">{t("works-text")}</p>
      </div>
      <div>
        <Flicking renderOnlyVisible={true} circular={true}>
          {panels.map((panel, index) => (
            <div className="flicking-panel" key={index} style={{ backgroundColor: panel.color }}>
              <img src={panel.image} alt="" />
              <a href={panel.link} className="flicking-index text-decoration-none">
                {index + 1}
              </a>
            </div>
          ))}
        </Flicking>
      </div>
    </div>
  );
}
