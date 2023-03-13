import * as React from 'react';
import { View, Text, ImageBackground, Image, Dimensions, TextInput, Keyboard } from 'react-native';

// Styles
const styles = {
    image: {
        transform: [{ translateX: 0 }, { translateY: 0 }],
        position: 'absolute',
        bottom: 0,
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
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: 'Sketch',
    },
    xmark: {
        width: 15,
        height: 15,

    },
    app2: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '69%',
        left: 60,
    },
    app: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '60%',
        left: 60,
    },
    bestChaine: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '32%',
        left: '49%',
        width: 40,
    },
    bestZone: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '40%',
        left: '49%',
        width: 40,
    },
    bestZoneResult: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '13%',
        left: '58%',
    },
    bestChaineResult: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '5%',
        left: '58%',
    },
    malusZone: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        bottom: '12%',
        left: '75%',
        width: 40,
    },
    totalResult: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 100,
        position: 'relative',
        bottom: '35%',
        left: '85%',
        width: 100,
    },
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
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        // @ts-ignore
        <ImageBackground style={[styles.image, { width: screenWidth, height: screenHeight - 100 }]} source={require("../assets/grilleCalculPoint.png")}>
            {/* @ts-ignore */}
            <View style={[styles.app, { width: styles.app.height * 8 }]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                </Row>
            </View>

            {/* @ts-ignore */}
            <View style={[styles.app2, { width: styles.app.height * 8 }]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput inputMode="tel" style={styles.text} />
                    </Col>
                </Row>
            </View>

            {/* @ts-ignore */}
            <View style={[styles.bestChaine, { width: styles.app.height }]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength="2" style={styles.text} />
                    </Col>
                </Row>
            </View>

            {/* @ts-ignore */}
            <View style={[styles.bestZone, { width: styles.app.height }]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength="2" style={styles.text} />
                    </Col>
                </Row>
            </View>
            {/* @ts-ignore */}
            <View style={[styles.bestChaineResult, { width: styles.app.height*1.25 }]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength="2" style={styles.text} />
                    </Col>
                </Row>
            </View>
            {/* @ts-ignore */}
            <View style={[styles.bestZoneResult, { width: styles.app.height*1.25 }]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength="2" style={styles.text} />
                    </Col>
                </Row>
            </View>
            {/* @ts-ignore */}
            <View style={[styles.malusZone, { width: styles.app.height*1.25 }]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength="2" style={styles.text} />
                    </Col>
                </Row>
            </View>
            {/* @ts-ignore */}
            <View style={[styles.totalResult]}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength="3" style={[styles.text,{fontSize: 60, textAlign: 'center', textAlignVertical : 'center'}]} />
                    </Col>
                </Row>
            </View>
        </ImageBackground>

    )
}

