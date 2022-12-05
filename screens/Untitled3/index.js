import { RadioGroup } from "react-native-radio-buttons-group";
import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Switch } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled3 = () => {
  return <View style={_styles.VIoYSDmx}>
      <TextInput style={_styles.sFnIZTNe}></TextInput><FlatList style={_styles.RqvjtSwj} renderItem={() => <View style={_styles.YXkZwHmZ}><Switch style={_styles.KhUVqzeG}></Switch></View>} ItemSeparatorComponent={() => <View style={_styles.KOYJantg} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList><ActivityIndicator style={_styles.XneIazEA}></ActivityIndicator><CheckBox style={_styles.OGMlhgnD} title="Checkbox Title"></CheckBox><RadioGroup style={_styles.HtpHTsCz} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup><CheckBox style={_styles.yLKmhKLl} title="Checkbox Title"></CheckBox><Switch style={_styles.lPHorEpf}></Switch></View>;
};

export default Untitled3;

const _styles = StyleSheet.create({
  VIoYSDmx: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  OpIbXqfP: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  XgVKZUmJ: {
    flex: 1
  },
  sFnIZTNe: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  RqvjtSwj: {
    position: "absolute",
    width: 100,
    height: 150
  },
  YXkZwHmZ: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  KOYJantg: {
    backgroundColor: "#000000",
    height: 1
  },
  KhUVqzeG: {
    width: 50,
    height: 25
  },
  XneIazEA: {
    width: 50,
    height: 50
  },
  OGMlhgnD: {
    width: 183,
    height: 69
  },
  HtpHTsCz: {
    width: 120,
    height: 70
  },
  yLKmhKLl: {
    width: 183,
    height: 69
  },
  lPHorEpf: {
    width: 50,
    height: 25
  }
});