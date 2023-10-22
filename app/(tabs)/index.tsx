import { StyleSheet } from "react-native"
import { View, Text, Image } from "react-native"
import { SIZES, COLORS, FONT } from "../../constants/Theme"
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userSection}>
        <Image
          source={require("../../assets/images/ricardo.webp")}
          resizeMode="contain"
          style={styles.userIcon}
        />
        <View>
          <Text>Seja bem vindo!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  userSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: `red`,
  },
  userIcon: {
    width: 75,
    height: 75,
    borderRadius: SIZES.sm,
  },
})
