import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export function DropDown({}) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
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
