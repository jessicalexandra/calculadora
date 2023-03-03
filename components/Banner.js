import { Image } from "react-native-web";

export default function Banner(props) {
    return(
    <Image source={require(`../assets/imagenes/${props.name}`)} style={{width:"100%",height:"100%",resizeMode:"cover"}}/>
    )
  }