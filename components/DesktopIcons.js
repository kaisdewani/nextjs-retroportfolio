import { Joy102, Inetcfg2300 } from "@react95/icons";

export default function DesktopIcons() {
  const tieriflicksAppUrl = "https://apps.apple.com/us/app/tieriflicks/id6476421455";
  const linkedInUrl = "https://www.linkedin.com/in/kaisdewani/"

  const handleIconClick = (passURL) => () => {
    window.open(passURL, "_blank");
  };
  

  return (
    <div className="mt-1">
      {/* iOS App Icon */}
      <div className="block m-auto px-6">
        <Joy102
          onClick={handleIconClick(tieriflicksAppUrl)}
          variant="32x32_4"
          className="cursor-pointer"
        />
      </div>
      <p className="mt-1 px-1 text-lg font-semibold">Tieriflicks</p>
      <p className="text-sm pb-5 font-normal text-gray-600">
        My First iOS App!
      </p>
      {/* LinkedIn Icon  */}
      <div className="block m-auto px-6">
        <Inetcfg2300
          onClick={handleIconClick(linkedInUrl)}
          variant="32x32_4"
          className="cursor-pointer"
        />
      </div>
      <p className="mt-1 px-1 text-lg font-semibold">LinkedIn</p>
      <p className="text-sm font-normal text-gray-600">
        Lets Connect
      </p>
    </div>
  );
}
