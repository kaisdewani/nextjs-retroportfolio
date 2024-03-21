import { Joy102 } from "@react95/icons";

export default function DesktopIcons() {
  const handleClickTieriflicks = () => {
    const url = "https://apps.apple.com/us/app/tieriflicks/id6476421455";
    window.open(url, "_blank");
  };

  return (
    <div className="mt-1">
      <div className="block m-auto px-6">
        <Joy102
          onClick={handleClickTieriflicks}
          variant="32x32_4"
          className="cursor-pointer"
        />
      </div>
      <p className="mt-1 px-1 text-lg font-semibold">Tieriflicks</p>{" "}
      {/* Main Title */}
      <p className="text-sm font-normal text-gray-600">
        My First iOS App!
      </p>{" "}
      {/* Subheading */}
    </div>
  );
}
