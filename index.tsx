import { View, Button, Label } from "ui";

declare var React;

let root = <View>
    <Label />
    <Button text="hello world" tap={() => console.log("hello world")} />
</View>;