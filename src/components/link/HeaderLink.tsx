import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithoutRef<'a'>;

export default function HeaderLink({
  children,
  href,
  nextLinkProps,
  ...rest
}: UnstyledLinkProps) {
  React.useState('');
  const { asPath } = useRouter();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    href === asPath ? setIsActive(true) : setIsActive(false);
  }, [asPath, href]);

  return (
    <Link href={href} {...nextLinkProps}>
      <a
        {...rest}
        className={clsx(' hover:text-primary-500', {
          'hover:text-primary-900 bg-primary-300 px-2 font-semibold ': isActive,
        })}
      >
        {children}
      </a>
    </Link>
  );
}
