export interface ContactCardProps {
  img: string;
  title: string;
  text: string;
  zIndex: number;
}

export function ContactCard({ img, title, text, zIndex }: ContactCardProps) {
  return (
    <li className="my-card" style={{ zIndex: zIndex }}>
      <div className="my-card-content">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <a href="" className="btn btn-outline-success btn-lg">
            Read more
          </a>
        </div>
        <figure>
          <img src={img} alt="" />
        </figure>
      </div>
    </li>
  );
}
