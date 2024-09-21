import SocialMediaLinks from "./SocialMediaLinks";

const ContactInformation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-slate-300 p-10  flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>
            <strong>Phone:</strong> +1-234-567-890
          </p>
          <p>
            <strong>Email:</strong> info@yourshop.com
          </p>
          <p>
            <strong>Address:</strong> 1234 Your Street, City, Country
          </p>
        </div>
      </div>
      <SocialMediaLinks />
    </div>
  );
};

export default ContactInformation;
