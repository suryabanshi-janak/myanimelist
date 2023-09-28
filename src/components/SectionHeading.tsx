import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  filterElement?: React.ReactNode;
}

export default function SectionHeading({
  heading,
  filterElement,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      <h2 className='px-4 text-xl leading-8 capitalize border-l-4 border-primary'>
        {heading}
      </h2>

      {filterElement}
    </div>
  );
}
