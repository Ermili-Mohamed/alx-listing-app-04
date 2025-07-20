const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-8">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} ListingApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
