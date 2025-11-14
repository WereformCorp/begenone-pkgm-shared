import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import ModalSelector from "react-native-modal-selector";
import { useState } from "react";
import { dropDownStyles } from "../../styles/dropDownStyles";
import { Ionicons } from "@expo/vector-icons";

export function DropDown({ selectText, data, styles, iconStyles }) {
  const [selected, setSelected] = useState(selectText);
  return (
    <View style={[dropDownStyles.container, styles]}>
      <ModalSelector
        data={data}
        initValue={selectText || "Select Option"}
        onChange={option => {
          console.log("Selected option:", option); // <-- key + label!
          setSelected(option);
        }}
        overlayStyle={dropDownStyles.overlayStyle}
        optionTextStyle={{ color: "#fff", fontWeight: "500" }}
        optionContainerStyle={dropDownStyles.optionContainerStyle}
        cancelTextStyle={{
          color: "#000",
          fontFamily: "Inter",
          fontWeight: "800",
        }}
        cancelStyle={dropDownStyles.cancelContainerStyle}
      >
        <View style={dropDownStyles.dropDownContainer}>
          <Text style={dropDownStyles.dropDownText}>
            {typeof selected === "string"
              ? selected // shows default selectText
              : selected?.label || "Select Option"}
          </Text>
          <Ionicons
            name="caret-down"
            size={16}
            color={"white"}
            style={iconStyles}
          />
        </View>
      </ModalSelector>
    </View>
  );
}
