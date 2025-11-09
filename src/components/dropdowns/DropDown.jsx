import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import ModalSelector from "react-native-modal-selector";
import { useState } from "react";
import { dropDownStyles } from "../../styles/dropDownStyles";

export function DropDown({ downIcon, data }) {
  const [selected, setSelected] = useState();

  return (
    <View style={dropDownStyles.container}>
      <ModalSelector
        data={data}
        initValue="Select language"
        onChange={option => setSelected(option.label)}
        overlayStyle={dropDownStyles.overlayStyle}
        optionTextStyle={{ color: "#fff" }}
        optionContainerStyle={dropDownStyles.optionContainerStyle}
        cancelTextStyle={{
          color: "#000",
          fontFamily: "Inter",
          fontWeight: "semibold",
        }}
        cancelStyle={dropDownStyles.cancelContainerStyle}
      >
        <View style={dropDownStyles.dropDownContainer}>
          <Text style={dropDownStyles.dropDownText}>
            {selected || "Select Option"}
          </Text>
          {downIcon}
        </View>
      </ModalSelector>
    </View>
  );
}

// import { View, Text } from "react-native";
// import RNPickerSelect from "react-native-picker-select";

// export const DropDown = () => {
//   return (
//     <View>
//       <RNPickerSelect
//         onValueChange={value => console.log(value)}
//         items={[
//           { label: "Football", value: "football" },
//           { label: "Baseball", value: "baseball" },
//           { label: "Hockey", value: "hockey" },
//         ]}
//       />
//     </View>
//   );
// };
