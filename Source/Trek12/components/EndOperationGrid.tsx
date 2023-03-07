import * as React from 'react';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';

// Styles
const styles = {
    image: {
        transform:[{translateX: 0}, {translateY: 0}],
        position : 'absolute',
        bottom: 0,   
    },
    app: {
        flex: 1, // the number of columns you want to devide the screen into
        height: 40,
        position: 'absolute',
        padding: 0,
        top: 19,
        right: 19,
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    
    "2col": {
        backgroundColor: "transparent",
        flex: 1,
        width: 'auto',
        borderColor: "black",
        borderWidth: 1,
        margin: 0,
    },
    "3col": {
        backgroundColor: "transparent",
        flex: 1,
        width: 'auto',
        borderColor: "black",
        borderWidth: 1,
        margin: 0,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: 'Sketch',
    },
    xmark: {
        width: 15,
        height: 15,
        
    }
};

// RN Code
const Col = ({ numRows, children }) => {
    return (
        <View style={styles[`${numRows}col`]}>{children}</View>
    )
}

const Row = ({ children }) => (
    // @ts-ignore
    <View style={styles.row}>{children}</View>
)

export default function EndOperation() {
    const xmark = "x";
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        // @ts-ignore
        <ImageBackground style={[styles.image, {width : screenWidth, height : screenHeight-100}]} source={require("../assets/grilleCalculPoint.png")}>
            {/* @ts-ignore */}
            <View style={[styles.app,{width: styles.app.height*8}]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                       <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                </Row>
            </View>
        </ImageBackground>

    )
}

