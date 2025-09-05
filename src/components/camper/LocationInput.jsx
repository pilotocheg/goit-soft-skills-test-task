import mapIcon from "../../images/map.svg";
import Input from "../common/Input";

export default function LocationInput({
  placeholder = "Kyiv, Ukraine",
  label = "Location",
  ...props
}) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      label={label}
      icon={mapIcon}
      {...props}
    />
  );
}
