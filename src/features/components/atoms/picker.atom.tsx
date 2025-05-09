import { useEffect, useState, type ComponentProps } from "react";
import IconConfig, { Icons } from "../../../config/icons.config";

type Option = {
  label: string;
  value: string;
  icon: Icons;
};

type PickerAtomProps = {
  variant: "primary" | "secondary";
  options: Option[];
} & Omit<ComponentProps<"input">, "onChange">;

export const PickerAtom: React.FC<PickerAtomProps> = ({
  variant,
  options,
  className,
  placeholder,
  ...props
}) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [search, setSearch] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (search) {
      setShowOptions(true);
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setShowOptions(false);
      setFilteredOptions(options);
    }
  }, [search, options]);

  const styles = {
    primary: "bg-background-primary text-foreground-primary",
    secondary: "bg-background-secondary text-foreground-secondary",
  };

  const CloseIcon = IconConfig.getIconByName("close")

  return (
    <div className="relative w-full">
      <input
        {...props}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        placeholder={placeholder ?? "Selecione uma opção"}
        className={`${styles[variant]} ${className} px-4 py-2 rounded w-full`}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setTimeout(() => setShowOptions(false), 200)} // pequena espera para permitir clique
      />
      {search && (
        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${styles[variant]}`}
          onClick={() => setSearch("")}
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      )}
      {showOptions && filteredOptions.length > 0 && (
        <ul className={`absolute mt-1 w-full border-none rounded shadow z-10 ${styles[variant]}`}>
          {filteredOptions.map((option) => {
            const Icon = IconConfig.getIconByName(option.icon)
            return (
              <li
                key={option.value}
                className="px-4 py-2 hover:bg-brand-dark/50 cursor-pointer flex gap-2 items-center"
                onMouseDown={() => {
                  setSearch(option.label);
                  setShowOptions(false);
                }}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{option.label}</span>
              </li>
            )
          }
          )}
        </ul>
      )}
    </div>
  );
};
