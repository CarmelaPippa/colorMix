//npm install react-fast-marquee --save
import Marquee from "react-fast-marquee";
import "./verticalMarquee.css";

export default function VerticalMarquee() {
  return (
    <div className="marquee">
      <Marquee direction="up">
        <p>MARQUEE WITH A COOL FONT </p>
        <p>MARQUEE WITH A COOL FONT </p>
      </Marquee>
    </div>
  );
}
