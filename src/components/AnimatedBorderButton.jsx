export const AnimatedBorderButton = ({
  children,
  href,
  className = "",
  ...props
}) => {
  // Renders a link when `href` is given (e.g. for downloads), otherwise a button
  const Component = href ? "a" : "button";
  const extraProps = href ? { href, ...props } : { type: "button", ...props };

  return (
    <Component
      {...extraProps}
      className={`group relative inline-flex cursor-pointer overflow-hidden rounded-full bg-border p-0.5 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {/* Light that travels around the border */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin motion-reduce:animate-none [animation-duration:4s] group-hover:[animation-duration:1.5s]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--color-primary) 90deg, var(--color-highlight) 180deg, transparent 270deg)",
        }}
      />

      {/* Button face */}
      <span className="relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-background px-8 py-4 text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
        {/* Teal fill that sweeps in from the left on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
        />

        <span className="relative flex items-center justify-center gap-2 transition-transform duration-300 group-hover:[&_svg]:translate-y-0.5">
          {children}
        </span>
      </span>
    </Component>
  );
};