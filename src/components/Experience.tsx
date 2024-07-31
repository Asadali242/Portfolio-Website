import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import Tile from "./Tile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-28  min-h-screen pt-8"
    >
      <div className="absolute inset-0 w-full min-h-screen grid grid-cols-11 lg:grid-cols-20 overflow-hidden z-0">
        {Array.from({ length: 20 * 30 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold my-6 text-center text-neutral-50">
          My Experience
        </h2>
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <VerticalTimeline lineColor="transparent">
            {experiencesData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  background: "#d3d3d3",
                  color: "#d4d4d4",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  fontSize: "1.5rem",
                  color: "#C5FF4A",
                }}
              >
                <div className="flex items-center mb-2">
                  <img
                    src={item.image}
                    alt={`${item.company} Logo`}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <h3 className="font-bold capitalize text-neutral-800">
                    {item.company}
                  </h3>
                </div>
                <p className="font-medium capitalize text-neutral-800">
                  {item.title}
                </p>
                <p className="font-normal !mt-0 text-neutral-800">
                  {item.location}
                </p>
                <p className="!mt-1 !font-normal text-neutral-800 whitespace-pre-line">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
