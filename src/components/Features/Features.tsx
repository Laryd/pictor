import {
  CircleCheckBig,
  Shield,
  CalendarClock,
  ListTodo,
  FileCog,
  FileImage,
} from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  name: string;
}

const features: FeatureProps[] = [
  {
    icon: <CircleCheckBig size={34} />,
    name: "Impeccable Organization",
  },
  {
    icon: <Shield size={34} />,
    name: "Unwavering Confidentiality and Security",
  },
  {
    icon: <CalendarClock size={34} />,
    name: "Seamless Access",
  },
  {
    icon: <FileImage size={34} />,
    name: "Versatility in File Formats",
  },
  {
    icon: <ListTodo size={34} />,
    name: "Tailored to Your Preferences",
  },
  {
    icon: <FileCog size={34} />,
    name: "Round-the-Clock Customer Support",
  },
];

const Features = () => {
  return (
    <section className="container sm:py-5">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {features.map(({ icon, name }: FeatureProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span className="text-blue-300">{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
