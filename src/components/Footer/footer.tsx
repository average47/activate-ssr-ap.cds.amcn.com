export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright &copy; 2010-{year} AMC Network Entertainment LLC. All rights
        reserved.
      </p>
    </footer>
  );
}
