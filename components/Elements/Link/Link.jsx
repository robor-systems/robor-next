import NextLink from "next/link";

const Link = ({ href, children }) => {
  return (
    <NextLink href={href} passHref={true}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
