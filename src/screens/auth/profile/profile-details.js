import { View, StyleSheet } from "react-native";
import React from "react";
import { AssetImage, Text } from "@/components";

import colors from "@/colors";

const DetailCard = ({ title, text, icon }) => (
  <View style={styles.card}>
    <View>
      <Text text={title} />
      <Text text={text} />
    </View>
    <AssetImage source={icon} />
  </View>
);

export default (props) => {
  const {
    navigation,
    handleSubmit,
    dispatch,
    route: { params: data },
  } = props;

  const { firstname, lastname, email, phone_number, postcode, street_address } =
    data.Users;
  return (
    <View style={styles.cont}>
      <View>
        <AssetImage source={AssetImage.images.dp} style={styles.dp} />
        <AssetImage source={AssetImage.images.camera} style={styles.camera} />
      </View>
      <Text text={`${firstname} ${lastname}`} />
      <Text text={email} />
      <DetailCard
        title='Address'
        text={`${street_address} ${postcode}`}
        icon={AssetImage.images.location}
      />
      <DetailCard
        title='Contact'
        text={phone_number}
        icon={AssetImage.images.call}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dp: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.white,
  },
  camera: {
    position: "absolute",
    width: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,

    bottom: 0,
    borderRadius: 40,
    backgroundColor: colors.gray2,
    right: 0,
    borderWidth: 1,
    borderColor: colors.black,
  },
  cont: {
    paddingVertical: "10%",
    borderRadius: 8,
    marginTop: "15%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
  },
  card: {
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "95%",
  },
});
