import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import ModalSelector from "react-native-modal-selector";
import { useState } from "react";
import { dropDownStyles } from "../../styles/dropDownStyles";

export function DropDown({}) {
  const [selected, setSelected] = useState();

  const data = [
    { key: 1, label: "Java" },
    { key: 2, label: "JavaScript" },
    { key: 3, label: "Python" },
  ];

  return (
    <View style={dropDownStyles.container}>
      <ModalSelector
        data={data}
        initValue="Select language"
        onChange={option => setSelected(option.label)}
        overlayStyle={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        optionTextStyle={{ color: "#fff" }}
        optionContainerStyle={{ backgroundColor: "#1e1e1e" }}
      >
        <Text
          style={{
            padding: 12,
            backgroundColor: "#151515",
            color: "white",
            borderRadius: 6,
            borderWidth: 1,
            borderColor: "#333",
          }}
        >
          {selected || "Select language"}
        </Text>
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
