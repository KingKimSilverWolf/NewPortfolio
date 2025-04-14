import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";
import plan from '../assets/plan1.jpg'
import design from '../assets/design.jpg'
import dev from '../assets/dev.jpg'
import maintenance from '../assets/a.jpg'
import testing from '../assets/d.jpg'
import deploy from '../assets/b.jpg'
import monitoring from '../assets/c.jpg'

// Define each stage of your development cycle.
const items = [
  {
    title: "Planning",
    description: "Define goals and project scope.",
    header: (
      <img
        src={plan}
        alt="Planning"
        className="rounded-lg object-cover w-full h-full"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Design",
    description: "Create UI/UX designs and prototypes.",
    header: (
      <img
        src={design}
        alt="Design"
        className="rounded-lg object-cover w-full h-full"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Development",
    description: "Write code and build the product.",
    header: (
      <img
        src={dev}
        alt="Development"
        className="rounded-lg object-cover w-full h-full"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Testing",
    description: "Ensure quality through rigorous testing.",
    header: (
      <img
        src={testing}
        alt="Testing"
        className="rounded-lg object-cover w-full h-43"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    // Make the Testing block larger (span two columns)
    className: "md:col-span-2",
  },
  {
    title: "Deployment",
    description: "Launch the product to production.",
    header: (
      <img
        src={deploy}
        alt="Deployment"
        className="rounded-lg object-cover w-full h-full"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Monitoring",
    description: "Track performance and uptime.",
    header: (
      <img
        src={monitoring}
        alt="Monitoring"
        className="rounded-lg object-cover w-full h-full"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Maintenance",
    description: "Update and improve the system continuously.",
    header: (
      <img
        src={maintenance}
        alt="Maintenance"
        className="rounded-lg object-cover w-140 h-40"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    // Make the Maintenance block larger (span two columns)
    className: "md:col-span-2",
  },
];

export default function SoftwareDevCycle() {
  return (
    <section id="sdlc" className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">My Software Development Cycle</h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
