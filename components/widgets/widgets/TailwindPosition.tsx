export function TailwindPosition(position) {
  return `col-start-${position[0]} row-start-${position[1]} col-span-${position[2]} row-span-${position[3]} rounded-widget shadow-widget p-2`;
}

export const Heading = (props) => {
  return <h3 className="pl-4 text-xl">{props.children}</h3>;
};
