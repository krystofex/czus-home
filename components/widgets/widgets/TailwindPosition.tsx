export function TailwindPosition(position) {
  return `col-start-${position[0]} row-start-${position[1]} col-span-${position[2]} row-span-${position[3]} rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget`;
}

export const Heading = (props) => {
  return (
    <h3 className="pl-4 text-xl text-light-text dark:text-dark-text">
      {props.children}
    </h3>
  );
};
